import { View, Text, StyleSheet, Pressable, SafeAreaView, Modal, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { WORDS } from '../data/words';
import { useTheme } from '../context/ThemeContext';

const ALPHABET = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
const MAX_MISTAKES = 6;

// Универсальный компонент для анимации
const AnimatedPart = ({ style, color, children }: { style: any, color: string, children?: React.ReactNode }) => {
  const scale = useSharedValue(0);
  useEffect(() => { scale.value = withTiming(1, { duration: 500 }); }, []);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  
  return (
    <Animated.View style={[style, animatedStyle]}>
      <View style={[{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }, { backgroundColor: color }]}>
        {children}
      </View>
    </Animated.View>
  );
};

export default function GameScreen() {
  const router = useRouter();
  const { theme, color, hat, face } = useTheme(); // Достаем цвет, шляпу и лицо

  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [finalWord, setFinalWord] = useState('');
  
  const [isLoading, setIsLoading] = useState(true);
  const [usedWords, setUsedWords] = useState<string[]>([]);

  useEffect(() => { loadGameState(); }, []);

  const loadGameState = async () => {
    setIsLoading(true);
    try {
      const savedGame = await AsyncStorage.getItem('@saved_game');
      if (savedGame) {
        const { savedWord, savedGuessed, savedMistakes } = JSON.parse(savedGame);
        if (savedMistakes < MAX_MISTAKES) {
          setWord(savedWord); setGuessedLetters(savedGuessed); setMistakes(savedMistakes);
          setIsLoading(false);
          return;
        }
      }
      await startNewGame(true);
    } catch (e) { await startNewGame(true); }
  };

  const saveGameState = async (currentWord: string, currentGuessed: string[], currentMistakes: number) => {
    try {
      await AsyncStorage.setItem('@saved_game', JSON.stringify({ savedWord: currentWord, savedGuessed: currentGuessed, savedMistakes: currentMistakes }));
    } catch (e) { console.log(e); }
  };

  const startNewGame = async (reset = false) => {
    setIsLoading(true);
    setGuessedLetters([]);
    setMistakes(0);
    setIsGameOver(false);
    setIsWin(false);
    setFinalWord('');

    let newWord = '';
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const response = await fetch('https://random-word-api.herokuapp.com/word?lang=ru&length=6', { signal: controller.signal });
      clearTimeout(timeoutId);
      const data = await response.json();
      if (data && data[0]) newWord = data[0].toUpperCase().replace(/Ё/g, 'Е');
    } catch (error) { console.log('Нет интернета, локальные слова.'); }

    if (!newWord) {
      let available = WORDS;
      if (reset || usedWords.length >= WORDS.length) { available = WORDS; setUsedWords([]); } 
      else { available = WORDS.filter(w => !usedWords.includes(w)); }
      const randomIndex = Math.floor(Math.random() * available.length);
      newWord = available[randomIndex];
    }

    setWord(newWord);
    setUsedWords(prev => [...prev, newWord]);
    setIsLoading(false);
    await AsyncStorage.removeItem('@saved_game');
  };

  const saveGameResult = async (win: boolean) => {
    try {
      let currentStreak = await AsyncStorage.getItem('@win_streak');
      let streak = currentStreak ? parseInt(currentStreak) : 0;
      if (win) {
        streak += 1;
        await AsyncStorage.setItem('@win_streak', streak.toString());
        const historyData = await AsyncStorage.getItem('@game_history');
        let history = historyData ? JSON.parse(historyData) : [];
        const date = new Date().toLocaleDateString('ru-RU');
        history.push({ id: Date.now().toString(), word: word, score: streak, date: date });
        history.sort((a: any, b: any) => b.score - a.score);
        history = history.slice(0, 3);
        await AsyncStorage.setItem('@game_history', JSON.stringify(history));
      } else { await AsyncStorage.setItem('@win_streak', '0'); }
      await AsyncStorage.removeItem('@saved_game');
    } catch (e) { console.log(e); }
  };

  const handleLetterPress = (letter: string) => {
    if (guessedLetters.includes(letter) || isGameOver || isLoading) return;

    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);

    if (!word.includes(letter)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      saveGameState(word, newGuessed, newMistakes);

      if (newMistakes >= MAX_MISTAKES) {
        setFinalWord(word); setIsGameOver(true); setIsWin(false); saveGameResult(false);
      }
    } else {
      saveGameState(word, newGuessed, mistakes);
      const isWordGuessed = word.split('').every(l => newGuessed.includes(l));
      if (isWordGuessed) {
        setFinalWord(word); setIsGameOver(true); setIsWin(true); saveGameResult(true);
      }
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <Text key={index} style={[styles.wordLetter, { color: theme.text }]}>
        {guessedLetters.includes(letter) ? letter : '_'}
      </Text>
    ));
  };

  // Отрисовка шляпы
  const renderGameHat = () => {
    if (hat.hat === 'none') return null;
    return (
      <View style={{ position: 'absolute', top: -24, alignItems: 'center', zIndex: 10 }}>
        {hat.hat === 'horns' && (
          <View style={{ flexDirection: 'row', width: 44, justifyContent: 'space-between' }}>
            <View style={{ width: 10, height: 16, backgroundColor: color.color, transform: [{ rotate: '-25deg' }], borderTopLeftRadius: 4 }} />
            <View style={{ width: 10, height: 16, backgroundColor: color.color, transform: [{ rotate: '25deg' }], borderTopRightRadius: 4 }} />
          </View>
        )}
        {hat.hat === 'wizard' && (
          <View style={{ alignItems: 'center' }}>
            <View style={{ borderBottomWidth: 35, borderBottomColor: color.color, borderLeftWidth: 18, borderRightWidth: 18, borderLeftColor: 'transparent', borderRightColor: 'transparent' }} />
            <View style={{ width: 50, height: 6, backgroundColor: color.color, borderRadius: 3, marginTop: -2 }} />
          </View>
        )}
        {hat.hat === 'tophat' && (
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: 32, height: 26, backgroundColor: color.color, borderRadius: 4, marginBottom: -2 }} />
            <View style={{ width: 48, height: 6, backgroundColor: color.color, borderRadius: 3 }} />
          </View>
        )}
        {hat.hat === 'halo' && (
          <View style={{ width: 34, height: 8, borderRadius: 4, borderWidth: 3, borderColor: '#FFD700', marginTop: 10 }} />
        )}
      </View>
    );
  };

  // Отрисовка эмоций на лице
  const renderFace = () => {
    // Глаза
    const eyes = face.face === 'dead' ? (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 16, position: 'absolute', top: 6 }}>
        <Text style={{ color: theme.bg, fontSize: 12, fontWeight: 'bold' }}>X</Text>
        <Text style={{ color: theme.bg, fontSize: 12, fontWeight: 'bold' }}>X</Text>
      </View>
    ) : face.face === 'angry' ? (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 16, position: 'absolute', top: 6 }}>
        <View style={{ width: 4, height: 4, backgroundColor: theme.bg, transform: [{ rotate: '45deg' }] }} />
        <View style={{ width: 4, height: 4, backgroundColor: theme.bg, transform: [{ rotate: '-45deg' }] }} />
      </View>
    ) : (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 16, position: 'absolute', top: 6 }}>
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: theme.bg }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: theme.bg }} />
      </View>
    );

    // Рот
    let mouth = null;
    if (face.face === 'happy') mouth = <View style={{ width: 12, height: 6, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, borderWidth: 2, borderTopWidth: 0, borderColor: theme.bg, position: 'absolute', top: 14 }} />;
    if (face.face === 'sad') mouth = <View style={{ width: 12, height: 6, borderTopLeftRadius: 6, borderTopRightRadius: 6, borderWidth: 2, borderBottomWidth: 0, borderColor: theme.bg, position: 'absolute', top: 16 }} />;
    if (face.face === 'dead') mouth = <View style={{ width: 10, height: 2, backgroundColor: theme.bg, position: 'absolute', top: 18 }} />;
    if (face.face === 'normal') mouth = <View style={{ width: 10, height: 2, backgroundColor: theme.bg, position: 'absolute', top: 16 }} />;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {eyes}
        {mouth}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={[styles.header, { backgroundColor: theme.bg }]}>
        <Pressable onPress={() => router.canGoBack() ? router.back() : router.replace('/')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={theme.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: theme.text }]}>ВИСЕЛИЦА</Text>
        <Text style={[styles.livesText, { color: theme.primary }]}>Жизни: {MAX_MISTAKES - mistakes}/{MAX_MISTAKES}</Text>
      </View>

      <View style={styles.hangmanContainer}>
        <View style={styles.hangmanBase}>
          <View style={[styles.hangmanPole, { backgroundColor: theme.text }]} />
          <View style={[styles.hangmanBeam, { backgroundColor: theme.text }]} />
          <View style={[styles.hangmanRope, { backgroundColor: theme.primary }]} />
          
          {/* ЧЕЛОВЕЧЕК */}
          {mistakes >= 1 && (
            <Animated.View style={[styles.hangmanHead, { borderColor: color.color }]}>
              {renderFace()}
              {renderGameHat()}
            </Animated.View>
          )}
          {mistakes >= 2 && <AnimatedPart style={styles.hangmanBody} color={color.color} />}
          {mistakes >= 3 && <AnimatedPart style={styles.hangmanLeftArm} color={color.color} />}
          {mistakes >= 4 && <AnimatedPart style={styles.hangmanRightArm} color={color.color} />}
          {mistakes >= 5 && <AnimatedPart style={styles.hangmanLeftLeg} color={color.color} />}
          {mistakes >= 6 && <AnimatedPart style={styles.hangmanRightLeg} color={color.color} />}
        </View>
      </View>

      <View style={styles.wordContainer}>
        {isLoading ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', height: 40 }}>
            <ActivityIndicator size="small" color={theme.primary} />
            <Text style={{ color: theme.text, marginLeft: 10 }}>Загрузка...</Text>
          </View>
        ) : renderWord()}
      </View>

      <View style={styles.keyboardContainer}>
        {ALPHABET.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isInWord = word.includes(letter);

          return (
            <Pressable
              key={letter}
              style={[
                styles.key,
                { backgroundColor: theme.card },
                isGuessed && (isInWord ? styles.keyCorrect : styles.keyWrong)
              ]}
              onPress={() => handleLetterPress(letter)}
              disabled={isGuessed || isGameOver || isLoading}
            >
              <Text style={[styles.keyText, { color: theme.primary }, isGuessed && { color: '#fff' }]}>
                {letter}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable style={[styles.restartButton, { backgroundColor: theme.primary }]} onPress={() => startNewGame(false)}>
        <Text style={styles.restartButtonText}>Начать заново</Text>
      </Pressable>

      <Modal visible={isGameOver} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
            <Ionicons name={isWin ? "happy-outline" : "sad-outline"} size={80} color={isWin ? "#4CAF50" : "#ff4d4d"} />
            <Text style={[styles.modalTitle, { color: theme.text }]}>{isWin ? 'Победа!' : 'Поражение'}</Text>
            <Text style={[styles.modalText, { color: theme.textMuted }]}>
              {isWin ? 'Вы отлично справились и угадали слово!' : `Вы проиграли. Загаданное слово: ${finalWord}`}
            </Text>
            
            <Pressable style={[styles.modalButton, { backgroundColor: theme.primary }]} onPress={() => { setIsGameOver(false); setTimeout(() => startNewGame(false), 100); }}>
              <Text style={styles.modalButtonText}>Далее</Text>
            </Pressable>
            <Pressable style={styles.modalButtonSecondary} onPress={async () => { setIsGameOver(false); await new Promise(resolve => setTimeout(resolve, 200)); router.push('/'); }}>
              <Text style={[styles.modalButtonSecondaryText, { color: theme.textMuted }]}>В меню</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', letterSpacing: 2 },
  livesText: { fontSize: 16, fontWeight: 'bold' },
  
  hangmanContainer: { height: 200, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20, marginBottom: 10 },
  hangmanBase: { width: 160, height: 190, position: 'relative' },
  
  hangmanPole: { position: 'absolute', bottom: 0, left: 30, width: 10, height: 190 },
  hangmanBeam: { position: 'absolute', top: 0, left: 30, width: 100, height: 10 },
  hangmanRope: { position: 'absolute', top: 10, left: 110, width: 6, height: 40 },
  
  hangmanHead: { 
    position: 'absolute', 
    top: 50, 
    left: 98, 
    width: 30, 
    height: 30, 
    borderWidth: 4, 
    borderRadius: 15,
    backgroundColor: '#ffffff', // Белый фон, чтобы эмоции были видны
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5
  },
  hangmanBody: { position: 'absolute', top: 80, left: 110, width: 6, height: 50 },
  hangmanLeftArm: { position: 'absolute', top: 85, left: 92, width: 18, height: 6, transform: [{ rotate: '30deg' }] },
  hangmanRightArm: { position: 'absolute', top: 85, left: 116, width: 18, height: 6, transform: [{ rotate: '-30deg' }] },
  hangmanLeftLeg: { position: 'absolute', top: 128, left: 104, width: 6, height: 30, transform: [{ rotate: '15deg' }] },
  hangmanRightLeg: { position: 'absolute', top: 128, left: 116, width: 6, height: 30, transform: [{ rotate: '-15deg' }] },
  
  wordContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 10, paddingHorizontal: 20, minHeight: 50 },
  wordLetter: { fontSize: 30, fontWeight: 'bold', marginHorizontal: 4, letterSpacing: 2 },
  keyboardContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingHorizontal: 10 },
  key: { width: 36, height: 46, justifyContent: 'center', alignItems: 'center', borderRadius: 8, margin: 3 },
  keyCorrect: { backgroundColor: '#4CAF50' },
  keyWrong: { backgroundColor: '#F44336' },
  keyText: { fontSize: 16, fontWeight: 'bold' },
  restartButton: { paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginHorizontal: 40, marginTop: 20, marginBottom: 20 },
  restartButtonText: { color: '#25292e', fontSize: 18, fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '85%', maxWidth: 400, borderRadius: 20, padding: 30, alignItems: 'center' },
  modalTitle: { fontSize: 28, fontWeight: 'bold', marginTop: 15, marginBottom: 10 },
  modalText: { fontSize: 16, textAlign: 'center', marginBottom: 25, lineHeight: 22 },
  modalButton: { width: '100%', paddingVertical: 15, borderRadius: 15, alignItems: 'center', marginBottom: 10 },
  modalButtonText: { color: '#25292e', fontSize: 18, fontWeight: 'bold' },
  modalButtonSecondary: { width: '100%', paddingVertical: 15, borderRadius: 15, alignItems: 'center' },
  modalButtonSecondaryText: { fontSize: 16, fontWeight: 'bold' },
});