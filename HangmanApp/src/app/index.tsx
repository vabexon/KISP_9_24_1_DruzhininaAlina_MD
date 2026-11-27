import { View, Text, StyleSheet, Pressable, FlatList, Modal, SafeAreaView, Platform, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter, useFocusEffect } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../context/ThemeContext'; // Подключаем тему

export default function StartScreen() {
  const router = useRouter();
  const { theme } = useTheme(); // Достаем текущие цвета
  const [isRulesVisible, setIsRulesVisible] = useState(false);
  const { width } = useWindowDimensions();
  const [isDesktop, setIsDesktop] = useState(false);
  
  const [winStreak, setWinStreak] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    setIsDesktop(width > 768);
  }, [width]);

  const loadData = async () => {
    try {
      const streak = await AsyncStorage.getItem('@win_streak');
      if (streak !== null) setWinStreak(parseInt(streak));

      const historyData = await AsyncStorage.getItem('@game_history');
      if (historyData !== null) {
        setHistory(JSON.parse(historyData));
      } else {
        setHistory([]);
      }
    } catch (e) { console.log('Ошибка загрузки:', e); }
  };

  useFocusEffect(React.useCallback(() => { loadData(); }, []));

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.bg }]}>
      <View style={[styles.container, isDesktop && styles.containerDesktop, { backgroundColor: theme.bg }]}>
        
        {/* Кнопка настроек (в правом верхнем углу) */}
        <Pressable style={styles.settingsButton} onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={28} color={theme.textMuted} />
        </Pressable>

        <View style={styles.logoContainer}>
          <Ionicons name="skull-outline" size={isDesktop ? 100 : 70} color={theme.primary} />
          <Text style={[styles.title, isDesktop && styles.titleDesktop, { color: theme.text }]}>ВИСЕЛИЦА</Text>

          <View style={[styles.winsContainer, { backgroundColor: theme.card }]}>
            <Ionicons name="flame-outline" size={20} color={theme.primary} />
            <Text style={[styles.winsText, { color: theme.text }]}>Побед подряд: {winStreak}</Text>
          </View>

          <Pressable onPress={() => setIsRulesVisible(true)} style={[styles.rulesButton, { backgroundColor: theme.card }]}>
            <Ionicons name="help-circle-outline" size={20} color={theme.textMuted} />
            <Text style={[styles.rulesText, { color: theme.textMuted }]}>Как играть?</Text>
          </Pressable>
        </View>

        <Pressable 
          style={[styles.startButton, isDesktop && styles.startButtonDesktop, { backgroundColor: theme.primary }]} 
          onPress={() => router.push('/game')}
        >
          <Text style={styles.startButtonText}>СТАРТ</Text>
        </Pressable>

        {/* Увеличенный блок топ-3 для мобилок (высота 200) */}
        <View style={[styles.historyContainer, isDesktop && styles.historyContainerDesktop, { backgroundColor: theme.card }]}>
          <Text style={[styles.historyTitle, { color: theme.primary }]}>Ваш топ-3 лучших серий:</Text>
          
          {history.length === 0 ? (
            <Text style={[styles.emptyText, { color: theme.textMuted }]}>Здесь появятся ваши лучшие результаты</Text>
          ) : (
            <FlatList
              data={history}
              keyExtractor={(item) => item.id}
              style={styles.flatListStyle}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <View style={[styles.historyCard, { borderBottomColor: theme.textMuted }]}>
                  <View style={styles.leftColumn}>
                    <Text style={[styles.historyWord, { color: theme.text }]}>{item.word}</Text>
                    <Text style={[styles.historyScore, { color: theme.primary }]}>{item.score} побед подряд</Text>
                  </View>
                  <Text style={[styles.historyDate, { color: theme.textMuted }]}>{item.date}</Text>
                </View>
              )}
            />
          )}
        </View>

        <Modal visible={isRulesVisible} animationType="fade" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, isDesktop && styles.modalContentDesktop, { backgroundColor: theme.card }]}>
              <Text style={[styles.modalTitle, { color: theme.primary }]}>Правила игры</Text>
              <Text style={[styles.modalText, { color: theme.text }]}>
                1. Компьютер загадывает слово и показывает его в виде прочерков.{"\n\n"}
                2. Вы вводите буквы по одной.{"\n\n"}
                3. Если буква есть в слове — она открывается.{"\n\n"}
                4. Если буквы нет — вы теряете одну жизнь (всего их 6).{"\n\n"}
                5. Угадайте все буквы, пока не кончились жизни!
              </Text>
              <Pressable style={[styles.closeButton, { backgroundColor: theme.primary }]} onPress={() => setIsRulesVisible(false)}>
                <Text style={styles.closeButtonText}>Понятно</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, alignItems: 'center', paddingTop: Platform.OS === 'android' ? 25 : 0 },
  container: { flex: 1, width: '100%', maxWidth: 500, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 40, paddingHorizontal: 20 },
  containerDesktop: { maxWidth: '100%', paddingHorizontal: 80 },
  settingsButton: { position: 'absolute', top: 20, right: 20, zIndex: 10, padding: 10 },
  logoContainer: { alignItems: 'center', marginTop: 30 },
  title: { fontSize: 34, fontWeight: 'bold', marginTop: 5, letterSpacing: 2 },
  titleDesktop: { fontSize: 48 },
  winsContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginTop: 15 },
  winsText: { fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
  rulesButton: { flexDirection: 'row', alignItems: 'center', marginTop: 12, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  rulesText: { marginLeft: 6, fontSize: 14 },
  startButton: { paddingVertical: 16, paddingHorizontal: 60, borderRadius: 30, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 },
  startButtonDesktop: { paddingVertical: 20, paddingHorizontal: 100 },
  startButtonText: { color: '#25292e', fontSize: 22, fontWeight: 'bold', letterSpacing: 1 },
  
  // УВЕЛИЧИЛИ ВЫСОТУ ДО 220 ДЛЯ МОБИЛОК
  historyContainer: { 
    width: '100%', 
    borderRadius: 15, 
    padding: 15,
    marginBottom: 10, 
    height: 220, 
    justifyContent: 'flex-start' 
  },
  historyContainerDesktop: { padding: 30, height: 250 },
  historyTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  emptyText: { fontSize: 14, fontStyle: 'italic', textAlign: 'center', paddingVertical: 20 },
  flatListStyle: { flex: 1 },
  historyCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1 },
  leftColumn: { flexDirection: 'column' },
  historyWord: { fontSize: 15, fontWeight: 'bold' },
  historyScore: { fontSize: 12, marginTop: 2 },
  historyDate: { fontSize: 12 },
  
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '85%', maxWidth: 400, borderRadius: 20, padding: 20, alignItems: 'center' },
  modalContentDesktop: { maxWidth: 700, padding: 40 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  modalTitleDesktop: { fontSize: 32 },
  modalText: { fontSize: 16, lineHeight: 24, marginBottom: 20 },
  modalTextDesktop: { fontSize: 20, lineHeight: 30 },
  closeButton: { paddingVertical: 10, paddingHorizontal: 30, borderRadius: 15 },
  closeButtonText: { color: '#25292e', fontWeight: 'bold', fontSize: 16 },
});