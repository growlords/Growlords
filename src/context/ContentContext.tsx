'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SiteContent } from '@/types/content';
import { DEFAULT_SITE_CONTENT } from '@/data/default-content';

interface ContentContextType {
  content: SiteContent;
  isLoading: boolean;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  updateContent: (newContent: SiteContent | ((prev: SiteContent) => SiteContent)) => void;
  saveToServer: () => Promise<{ success: boolean; message?: string }>;
  resetToDefaults: () => Promise<{ success: boolean }>;
  reloadFromServer: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({
  children,
  initialContent,
}: {
  children: React.ReactNode;
  initialContent?: SiteContent;
}) {
  const [content, setContent] = useState<SiteContent>(
    initialContent || DEFAULT_SITE_CONTENT
  );
  const [lastSavedContent, setLastSavedContent] = useState<SiteContent>(
    initialContent || DEFAULT_SITE_CONTENT
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const hasUnsavedChanges =
    JSON.stringify(content) !== JSON.stringify(lastSavedContent);

  // Sync latest from API on client mount
  const reloadFromServer = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/content', { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setContent(json.data);
          setLastSavedContent(json.data);
        }
      }
    } catch (e) {
      console.warn('Could not refresh content from /api/content:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    reloadFromServer();
  }, [reloadFromServer]);

  // Listen to broadcast storage events if multiple tabs are open
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'growlords_content_updated') {
        reloadFromServer();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [reloadFromServer]);

  const updateContent = useCallback(
    (newContent: SiteContent | ((prev: SiteContent) => SiteContent)) => {
      setContent((prev) => {
        if (typeof newContent === 'function') {
          return newContent(prev);
        }
        return newContent;
      });
    },
    []
  );

  const saveToServer = useCallback(async (): Promise<{ success: boolean; message?: string }> => {
    try {
      setIsSaving(true);
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setLastSavedContent(content);
        // Notify other tabs
        try {
          localStorage.setItem('growlords_content_updated', Date.now().toString());
        } catch (_) {}
        return { success: true, message: 'Changes published successfully!' };
      }
      return { success: false, message: data.error || 'Failed to save changes.' };
    } catch (err: any) {
      return { success: false, message: err?.message || 'Network error saving changes.' };
    } finally {
      setIsSaving(false);
    }
  }, [content]);

  const resetToDefaults = useCallback(async (): Promise<{ success: boolean }> => {
    try {
      setIsSaving(true);
      const res = await fetch('/api/content/reset', { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.success) {
        setContent(data.data);
        setLastSavedContent(data.data);
        try {
          localStorage.setItem('growlords_content_updated', Date.now().toString());
        } catch (_) {}
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      return { success: false };
    } finally {
      setIsSaving(false);
    }
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content,
        isLoading,
        isSaving,
        hasUnsavedChanges,
        updateContent,
        saveToServer,
        resetToDefaults,
        reloadFromServer,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
