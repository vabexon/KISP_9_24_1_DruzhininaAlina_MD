import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const THEMES = {
  darkBlue: { name: 'Темно-синий', bg: '#25292e', primary: '#ffd33d', card: '#333333', text: '#ffffff', textMuted: '#aaaaaa' },
  darkGreen: { name: 'Темно-зеленый', bg: '#1b2a1e', primary: '#a3c94a', card: '#2a3d2d', text: '#ffffff', textMuted: '#8da38f' },
  darkRed: { name: 'Багровый', bg: '#2b1b1b', primary: '#ff6b6b', card: '#3d2a2a', text: '#ffffff', textMuted: '#a38f8f' },
  darkPurple: { name: 'Фиолетовый', bg: '#201a29', primary: '#c97af2', card: '#2d2438', text: '#ffffff', textMuted: '#9687a3' },
  darkOrange: { name: 'Оранжевый', bg: '#2b1f17', primary: '#f29b38', card: '#3d2d22', text: '#ffffff', textMuted: '#a38f82' },
  midnight: { name: 'Черный', bg: '#0f0f0f', primary: '#00e5ff', card: '#1f1f1f', text: '#ffffff', textMuted: '#888888' },
};

export type ThemeKeys = keyof typeof THEMES;

// Шляпы (без эмоций)
export const HANGMAN_HATS = {
  none: { name: 'Без шляпы', hat: 'none' },
  horns: { name: 'Рога', hat: 'horns' },
  wizard: { name: 'Колпак', hat: 'wizard' },
  tophat: { name: 'Цилиндр', hat: 'tophat' },
  halo: { name: 'Нимб', hat: 'halo' },
};

export type HatKeys = keyof typeof HANGMAN_HATS;

// Цвета кожи для человечка
export const HANGMAN_COLORS = {
  white: { name: 'Белый', color: '#ffffff' },
  green: { name: 'Зеленый', color: '#4CAF50' },
  red: { name: 'Красный', color: '#F44336' },
  purple: { name: 'Фиолетовый', color: '#9C27B0' },
  yellow: { name: 'Желтый', color: '#FFC107' },
  blue: { name: 'Голубой', color: '#00BCD4' },
};

export type ColorKeys = keyof typeof HANGMAN_COLORS;

// Эмоции
export const HANGMAN_FACES = {
  normal: { name: 'Обычное', face: 'normal' },
  happy: { name: 'Веселое', face: 'happy' },
  sad: { name: 'Грустное', face: 'sad' },
  angry: { name: 'Злое', face: 'angry' },
  dead: { name: 'Мертвое', face: 'dead' },
};

export type FaceKeys = keyof typeof HANGMAN_FACES;

type ThemeContextType = {
  theme: typeof THEMES[ThemeKeys];
  themeKey: ThemeKeys;
  setThemeKey: (key: ThemeKeys) => void;
  
  color: typeof HANGMAN_COLORS[ColorKeys];
  colorKey: ColorKeys;
  setColorKey: (key: ColorKeys) => void;

  hat: typeof HANGMAN_HATS[HatKeys];
  hatKey: HatKeys;
  setHatKey: (key: HatKeys) => void;

  face: typeof HANGMAN_FACES[FaceKeys];
  faceKey: FaceKeys;
  setFaceKey: (key: FaceKeys) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeKey, setThemeKeyState] = useState<ThemeKeys>('darkBlue');
  const [colorKey, setColorKeyState] = useState<ColorKeys>('white');
  const [hatKey, setHatKeyState] = useState<HatKeys>('none');
  const [faceKey, setFaceKeyState] = useState<FaceKeys>('normal');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('@theme_key');
        const savedColor = await AsyncStorage.getItem('@color_key');
        const savedHat = await AsyncStorage.getItem('@hat_key');
        const savedFace = await AsyncStorage.getItem('@face_key');
        
        if (savedTheme && THEMES[savedTheme as ThemeKeys]) setThemeKeyState(savedTheme as ThemeKeys);
        if (savedColor && HANGMAN_COLORS[savedColor as ColorKeys]) setColorKeyState(savedColor as ColorKeys);
        if (savedHat && HANGMAN_HATS[savedHat as HatKeys]) setHatKeyState(savedHat as HatKeys);
        if (savedFace && HANGMAN_FACES[savedFace as FaceKeys]) setFaceKeyState(savedFace as FaceKeys);
      } catch (e) { console.log(e); }
      setIsLoaded(true);
    };
    loadSettings();
  }, []);

  const setThemeKey = async (key: ThemeKeys) => { setThemeKeyState(key); await AsyncStorage.setItem('@theme_key', key); };
  const setColorKey = async (key: ColorKeys) => { setColorKeyState(key); await AsyncStorage.setItem('@color_key', key); };
  const setHatKey = async (key: HatKeys) => { setHatKeyState(key); await AsyncStorage.setItem('@hat_key', key); };
  const setFaceKey = async (key: FaceKeys) => { setFaceKeyState(key); await AsyncStorage.setItem('@face_key', key); };

  if (!isLoaded) return null;

  return (
    <ThemeContext.Provider value={{ 
      theme: THEMES[themeKey] || THEMES.darkBlue, themeKey, setThemeKey,
      color: HANGMAN_COLORS[colorKey] || HANGMAN_COLORS.white, colorKey, setColorKey,
      hat: HANGMAN_HATS[hatKey] || HANGMAN_HATS.none, hatKey, setHatKey,
      face: HANGMAN_FACES[faceKey] || HANGMAN_FACES.normal, faceKey, setFaceKey
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};