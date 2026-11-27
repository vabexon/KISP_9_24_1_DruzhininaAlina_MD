import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/ThemeContext'; // Импортируем провайдер

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="game" />
        <Stack.Screen name="settings" />
      </Stack>
    </ThemeProvider>
  );
}