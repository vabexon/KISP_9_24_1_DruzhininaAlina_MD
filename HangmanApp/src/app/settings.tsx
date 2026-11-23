import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme, THEMES, ThemeKeys, HANGMAN_HATS, HatKeys, HANGMAN_COLORS, ColorKeys, HANGMAN_FACES, FaceKeys } from '../context/ThemeContext';

export default function SettingsScreen() {
  const router = useRouter();
  const { 
    theme, themeKey, setThemeKey, 
    colorKey, setColorKey, 
    hatKey, setHatKey, 
    faceKey, setFaceKey 
  } = useTheme();
  
  const { width } = useWindowDimensions();
  const cardWidth = width > 768 ? 100 : '30%'; // Сделали карточки чуть меньше, чтобы влезало по 3 в ряд

  // Рисуем превью для шляп
  const renderHatPreview = (hatType: string, color: string) => {
    if (hatType === 'horns') {
      return (
        <View style={{ flexDirection: 'row', width: 30, justifyContent: 'space-between' }}>
          <View style={{ width: 6, height: 12, backgroundColor: color, transform: [{ rotate: '-25deg' }] }} />
          <View style={{ width: 6, height: 12, backgroundColor: color, transform: [{ rotate: '25deg' }] }} />
        </View>
      );
    }
    if (hatType === 'wizard') {
      return <View style={{ borderBottomWidth: 18, borderBottomColor: color, borderLeftWidth: 9, borderRightWidth: 9, borderLeftColor: 'transparent', borderRightColor: 'transparent' }} />;
    }
    if (hatType === 'tophat') {
      return <View style={{ width: 22, height: 14, backgroundColor: color, borderRadius: 2, marginTop: 6 }} />;
    }
    if (hatType === 'halo') {
      return <View style={{ width: 20, height: 6, borderRadius: 3, borderWidth: 2, borderColor: '#FFD700', marginTop: 10 }} />;
    }
    return <View style={{ height: 20 }} />;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.canGoBack() ? router.back() : router.replace('/')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={theme.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Настройки</Text>
        <View style={{ width: 28 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* ЦВЕТА */}
        <Text style={[styles.sectionTitle, { color: theme.primary }]}>Цветовая тема</Text>
        <View style={styles.optionsRow}>
          {(Object.keys(THEMES) as ThemeKeys[]).map((key) => (
            <Pressable key={key} style={[styles.optionCard, { backgroundColor: THEMES[key].bg, width: cardWidth }, themeKey === key && { borderColor: theme.primary }]} onPress={() => setThemeKey(key)}>
              <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: THEMES[key].primary }} />
              <Text style={{ color: THEMES[key].text, marginTop: 5, fontSize: 12, textAlign: 'center' }}>{THEMES[key].name}</Text>
            </Pressable>
          ))}
        </View>

        {/* ЦВЕТ КОЖИ */}
        <Text style={[styles.sectionTitle, { color: theme.primary, marginTop: 20 }]}>Цвет человечка</Text>
        <View style={styles.optionsRow}>
          {(Object.keys(HANGMAN_COLORS) as ColorKeys[]).map((key) => (
            <Pressable key={key} style={[styles.optionCard, { backgroundColor: theme.card, width: cardWidth }, colorKey === key && { borderColor: theme.primary }]} onPress={() => setColorKey(key)}>
              <View style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 4, borderColor: HANGMAN_COLORS[key].color }} />
              <Text style={{ color: theme.text, marginTop: 5, fontSize: 12, textAlign: 'center' }}>{HANGMAN_COLORS[key].name}</Text>
            </Pressable>
          ))}
        </View>

        {/* ШЛЯПЫ */}
        <Text style={[styles.sectionTitle, { color: theme.primary, marginTop: 20 }]}>Головные уборы</Text>
        <View style={styles.optionsRow}>
          {(Object.keys(HANGMAN_HATS) as HatKeys[]).map((key) => (
            <Pressable key={key} style={[styles.optionCard, { backgroundColor: theme.card, width: cardWidth }, hatKey === key && { borderColor: theme.primary }]} onPress={() => setHatKey(key)}>
              <View style={{ height: 40, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5 }}>
                {renderHatPreview(HANGMAN_HATS[key].hat, theme.text)}
              </View>
              <Text style={{ color: theme.text, fontSize: 12, textAlign: 'center' }}>{HANGMAN_HATS[key].name}</Text>
            </Pressable>
          ))}
        </View>

        {/* ЭМОЦИИ */}
        <Text style={[styles.sectionTitle, { color: theme.primary, marginTop: 20 }]}>Эмоции</Text>
        <View style={styles.optionsRow}>
          {(Object.keys(HANGMAN_FACES) as FaceKeys[]).map((key) => (
            <Pressable key={key} style={[styles.optionCard, { backgroundColor: theme.card, width: cardWidth }, faceKey === key && { borderColor: theme.primary }]} onPress={() => setFaceKey(key)}>
              <Text style={{ color: theme.text, fontSize: 14, fontWeight: 'bold' }}>{HANGMAN_FACES[key].name}</Text>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', letterSpacing: 1 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  optionsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 10 },
  optionCard: { height: 90, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'transparent', padding: 5 },
});