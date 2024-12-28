"use client"
import { useState, useRef, useCallback, useEffect } from 'react';

export const useTableResize = (initialWidths: { [key: string]: number }) => {
  const [columnWidths, setColumnWidths] = useState(initialWidths);
  const [resizing, setResizing] = useState<string | null>(null);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);

  const handleResizeStart = useCallback((e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setResizing(key);
    startXRef.current = e.clientX;
    startWidthRef.current = columnWidths[key];
  }, [columnWidths]);

  const handleResizeMove = useCallback((e: MouseEvent) => {
    if (!resizing) return;
    
    const diff = e.clientX - startXRef.current;
    const newWidth = Math.max(50, startWidthRef.current + diff);
    
    setColumnWidths(prev => ({
      ...prev,
      [resizing]: newWidth
    }));
  }, [resizing]);

  const handleResizeEnd = useCallback(() => {
    setResizing(null);
  }, []);

  useEffect(() => {
    if (resizing) {
      window.addEventListener('mousemove', handleResizeMove);
      window.addEventListener('mouseup', handleResizeEnd);
      return () => {
        window.removeEventListener('mousemove', handleResizeMove);
        window.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [resizing, handleResizeMove, handleResizeEnd]);

  return {
    columnWidths,
    handleResizeStart
  };
};