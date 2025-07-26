// src/hooks/useImageFallback.ts
import { useState, useCallback } from 'react';
import { ImageSourcePropType } from 'react-native';

interface UseImageFallbackResult {
  source: ImageSourcePropType | { uri: string };
  onError: () => void;
}

/**
 * Если загрузка по uri упала, переключаемся на локальную заглушку.
 * @param uri — ссылка на картинку
 * @param fallback — локальный require-файл вашей заглушки
 */
export default function useImageFallback(
  uri: string | undefined,
  fallback: ImageSourcePropType
): UseImageFallbackResult {
  const [failed, setFailed] = useState(false);

  const onError = useCallback(() => {
    setFailed(true);
  }, []);

  const source = !uri || failed
    ? fallback
    : { uri };

  return { source, onError };
}
