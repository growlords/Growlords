import { NextRequest, NextResponse } from 'next/server';
import { getDefaultSiteContent, saveSiteContent } from '@/lib/content';
import { isAuthenticatedRequest } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    // Verify admin authentication
    const isAuth = await isAuthenticatedRequest(req);
    if (!isAuth) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Admin authentication required to reset content.' },
        { status: 401 }
      );
    }

    const defaultData = getDefaultSiteContent();
    const saved = saveSiteContent(defaultData);

    if (!saved) {
      return NextResponse.json(
        { success: false, error: 'Failed to reset content' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Content reset to defaults',
      data: defaultData,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to reset content' },
      { status: 500 }
    );
  }
}
