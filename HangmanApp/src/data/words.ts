import { ALL_WORDS } from './wordsData';

// Превращаем длинную строку в массив слов
export const WORDS = (ALL_WORDS as string)
  .split('\n')
  .map((word) => word.trim().toUpperCase())
  .filter((word) => word.length >= 4 && word.length <= 10)
  .filter((word) => !word.includes('Ё'));