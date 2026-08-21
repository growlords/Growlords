import { NextRequest } from 'next/server';

export const AUTH_COOKIE_NAME = 'growlords_admin_session';
export const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days

// Configurable credentials with secure fallbacks
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'growlords2026!';
const CMS_SECRET = process.env.CMS_SECRET || 'growlords-cms-secret-key-2026-production-salt';

// Web Crypto HMAC key derivation (Edge and Node compatible)
async function getCryptoKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return await crypto.subtle.importKey(
    'raw',
    enc.encode(CMS_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

// Convert ArrayBuffer to base64url string
function bufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// Convert base64url string to Uint8Array
function base64UrlToBuffer(base64url: string): Uint8Array {
  let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export interface SessionPayload {
  username: string;
  iat: number;
  exp: number;
}

/**
 * Creates a cryptographically signed session token.
 */
export async function createSessionToken(username: string): Promise<string> {
  const key = await getCryptoKey();
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    username,
    iat: now,
    exp: now + SESSION_DURATION_SECONDS,
  };

  const enc = new TextEncoder();
  const payloadJson = JSON.stringify(payload);
  const payloadBase64 = bufferToBase64Url(enc.encode(payloadJson).buffer as ArrayBuffer);

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    enc.encode(payloadBase64)
  );
  const signatureBase64 = bufferToBase64Url(signature);

  return `${payloadBase64}.${signatureBase64}`;
}

/**
 * Verifies a session token signature and expiration timestamp.
 */
export async function verifySessionToken(
  token?: string | null
): Promise<{ valid: boolean; payload?: SessionPayload }> {
  if (!token || typeof token !== 'string') {
    return { valid: false };
  }

  const parts = token.split('.');
  if (parts.length !== 2) {
    return { valid: false };
  }

  const [payloadBase64, signatureBase64] = parts;

  try {
    const key = await getCryptoKey();
    const enc = new TextEncoder();
    const signatureBytes = base64UrlToBuffer(signatureBase64);

    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes as any,
      enc.encode(payloadBase64)
    );

    if (!isValid) {
      return { valid: false };
    }

    const payloadBytes = base64UrlToBuffer(payloadBase64);
    const dec = new TextDecoder();
    const payload: SessionPayload = JSON.parse(dec.decode(payloadBytes));

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return { valid: false };
    }

    return { valid: true, payload };
  } catch (error) {
    return { valid: false };
  }
}

/**
 * Validates login credentials against configured admin environment variables.
 */
export function validateCredentials(username?: string, password?: string): boolean {
  if (!username || !password) return false;
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

/**
 * Helper to check auth on NextRequest in API routes.
 */
export async function isAuthenticatedRequest(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return false;
  const result = await verifySessionToken(token);
  return result.valid;
}
