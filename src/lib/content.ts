import fs from 'fs';
import path from 'path';
import { SiteContent } from '@/types/content';
import { DEFAULT_SITE_CONTENT } from '@/data/default-content';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'site-content.json');

// Global in-memory cache for serverless environments (e.g. Vercel)
declare global {
  // eslint-disable-next-line no-var
  var __growlords_content_cache__: SiteContent | undefined;
}

export function getDefaultSiteContent(): SiteContent {
  return JSON.parse(JSON.stringify(DEFAULT_SITE_CONTENT)) as SiteContent;
}

export function getSiteContent(): SiteContent {
  // 1. Check in-memory global cache first (important for Vercel serverless functions)
  if (global.__growlords_content_cache__) {
    return JSON.parse(JSON.stringify(global.__growlords_content_cache__)) as SiteContent;
  }

  // 2. Attempt reading from file system
  try {
    if (fs.existsSync(CONTENT_FILE_PATH)) {
      const fileContent = fs.readFileSync(CONTENT_FILE_PATH, 'utf-8');
      if (fileContent && fileContent.trim().length > 0) {
        const parsed = JSON.parse(fileContent) as SiteContent;
        global.__growlords_content_cache__ = parsed;
        return parsed;
      }
    }
  } catch (error) {
    // In serverless, filesystem access may be restricted
    console.warn('Note: Filesystem read note (using default/cached content):', error);
  }

  const fallback = getDefaultSiteContent();
  global.__growlords_content_cache__ = fallback;
  return fallback;
}

export function saveSiteContent(newContent: SiteContent): boolean {
  // 1. Always update the in-memory cache
  global.__growlords_content_cache__ = JSON.parse(JSON.stringify(newContent));

  // 2. Attempt persisting to local disk (succeeds in dev, local node, Docker)
  try {
    const dir = path.dirname(CONTENT_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(newContent, null, 2), 'utf-8');
    return true;
  } catch (error) {
    // In Vercel serverless functions, write access to process.cwd() is read-only.
    // In-memory cache is updated so the active runtime session reflects changes.
    console.warn('Filesystem write notice (content updated in runtime cache):', error);
    return true;
  }
}
