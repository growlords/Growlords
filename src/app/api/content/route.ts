import { NextRequest, NextResponse } from 'next/server';
import { getSiteContent, saveSiteContent } from '@/lib/content';
import { SiteContent } from '@/types/content';
import { isAuthenticatedRequest } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const content = getSiteContent();
    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Verify admin authentication
    const isAuth = await isAuthenticatedRequest(req);
    if (!isAuth) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Admin authentication required to modify content.' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const updatedContent = body as SiteContent;

    if (!updatedContent || !updatedContent.hero || !updatedContent.services) {
      return NextResponse.json(
        { success: false, error: 'Invalid content schema payload' },
        { status: 400 }
      );
    }

    const saved = saveSiteContent(updatedContent);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: 'Failed to write content to disk' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Content successfully published',
      data: updatedContent,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update content' },
      { status: 500 }
    );
  }
}
