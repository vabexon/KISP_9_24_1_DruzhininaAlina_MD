# Работа с Expo

**Expo** — это фреймворк React Native, который облегчает разработку приложений для Android и iOS. Это открытый исходный код с активным сообществом на GitHub и Discord.

### Начните с стандартного проекта 
Чтобы создать новый проект, выполните следующую команду:
*npx create-expo-app@latest*

### Начнём с примера 
Это небольшие приложения, каждое из которых демонстрирует определённую функцию или интеграцию, такие как Expo Router, Expo Widgets или экран камеры.

Чтобы просмотреть полный список и выбрать интерактивно, запустите с помощью *create-expo-app*  *--example* Опция и Нет имени:
*npx create-expo-app@latest --example*

Чтобы создать известный пример напрямую, передайте его имя:
*npx create-expo-app@latest --example with-widgets*

### Настройте агента ИИ 
Новый проект включает файлы контекста проекта, которые агенты ИИ читают: AGENTS.md, CLAUDE.md и .claude/settings.json. Claude Code и Codex также имеют официальный плагин для Expo. Используя одну команду, вы можете установить Expo Skills и зарегистрировать сервер Expo Model Context Protocol (MCP):
*claude plugin install expo@claude-plugins-official*

## Настройте свою среду ## 
Expo Go — это игровая площадка, где студенты и ученики могут быстро попробовать Expo. Билд для разработки — это сборка собственного приложения, включающая инструменты для разработчиков Expo.

### Настройте Android-устройство с помощью Expo Go ###
Отсканируйте QR-код, чтобы скачать приложение из Google Play Store, или посетите страницу Expo Go в Google Play Store.

## Начинайте развивать ##
### Запустите сервер разработки ###
Чтобы запустить сервер разработки, выполните следующую команду:
*npx expo start*

### Откройте приложение на вашем устройстве ###
После выполнения вышеуказанной команды вы увидите QR-код в терминале. Отсканируйте этот QR-код, чтобы открыть приложение на вашем устройстве.

### Сделайте первое изменение ###
Откройте файл **src/app/index.tsx** в редакторе кода и внесите изменения.

src/app/index.tsx
     <ThemedView style={styles.heroSection}>
       <AnimatedIcon />
 <ThemeText type="title" style={styles.title}>
 Добро пожаловать в&nbsp; Экспо
 Привет, мир!
       </ThemedText>
     </ThemedView>

### Структура файла
**Файлы**
1. Приложение: 

2. Компоненты:

3. Константы:

4. Крючки:

5. Активы:

6. Сценарии: 

7. app.json

8. package.json

9. tsconfig.json
## Следующие шаги
### Сбросьте проект
Вы можете убрать стандартный код и начать новый проект. Выполните следующую команду для сброса проекта:
*npm run reset-project*
Эта команда переместит существующие файлы в приложении в **app-example**, затем создаёт новую папку приложения с новым файлом **index.tsx**.

# Создайте свое первое приложение
Цель этого урока - начать с Expo и познакомиться с Expo SDK. Он будет охватывать следующие темы:

1. Создать приложение с помощью шаблона по умолчанию с включенным типом Скриптом
2. Реализуйте двухэкранный макет нижних вкладок с помощью Expo Router
3. Разбейте макет приложения и реализуйте его с помощью flexbox
4. Используйте пользовательский интерфейс системы каждой платформы для выбора изображения из медиа-библиотеки
5. Создайте модаль наклейки с помощью <Modal> и <FlatList> Компоненты от React Native
6. Добавьте сенсорные жесты, чтобы взаимодействовать со стикером
7. Используйте сторонние библиотеки, чтобы захватить скриншот и сохранить его на диске
8. Обработка различий в платформе между Android, iOS и Web
9. Наконец, пройдите процесс настройки панели состояния, экрана брызг и значка для завершения приложения.

### Инициализировать новое приложение Expo
Мы будем использовать *create-expo-app*. Запустите следующую команду в вашем терминале:

```
npx create-expo-app@latest StickerSmash
Select an Expo SDK version > SDK 57
cd StickerSmash
```

Эта команда создаст новый каталог проекта под названием StickerSmash, используя шаблон по умолчанию. Этот шаблон имеет необходимый шаблонный код и библиотеки, необходимые для создания нашего приложения, включая Expo Router, и позволяет нам тестировать наше приложение с помощью Expo Go, установленного на наших устройствах.

### Скачать активы
[Архив](https://docs.expo.dev/static/images/tutorial/sticker-smash-assets.zip) <- нажать для скачивания

После загрузки архива:

1. Расчистите архив и замените активы по умолчанию в your-project-name/assets/imagesкаталоге «Ваш-проект-имя/активы/изображения».
2. Откройте каталог проекта в редакторе кода или IDE.

### Запустить сценарий сброса-проекта
Давайте запустим reset-project скрипт для удаления кода шаблона:

`npm run reset-project`

После выполнения вышеуказанной команды в каталоге **src/app** осталось два файла (**index.tsx** и **_layout.tsx**). Предыдущие файлы из каталога **src** (включая компоненты, **константы** и **зацепки**) перемещаются в **диаграмму** по сценарию. Мы создадим наши собственные каталоги и составные файлы по мере продвижения.

### Запуск приложения на мобильном и веб-сайте
В каталоге проекта запустите следующую команду для запуска сервера разработки с терминала:

`npx expo start`

После выполнения вышеуказанной команды:

1. Завершится сервер разработки, и вы увидите QR-код внутри окна терминала.
2. Сканируйте этот QR-код, чтобы открыть приложение на устройстве. На Android используйте опцию Expo Go > Scan QR-кода. На iOS используйте приложение камеры по умолчанию.
3. Чтобы запустить веб-приложение, нажмите W В терминале. Он откроет веб-приложение в веб-браузере по умолчанию.

### Редактировать индексный экран
**src/app/index.tsx** файл определяет текст, отображаемый на экране приложения. Это точка входа нашего приложения и выполняет, когда сервер разработки начинается. Он использует основные компоненты React Native, такие как <View> и <Text> для отображения фона и текста.

Давайте изменим экран src/app/index.tsx:

1. Импорт *StyleSheet* от *react-native* и создать a *styles* Возражает, чтобы определить наши пользовательские стили.
2. Добавить *styles.container.backgroundColor* собственность для <View> с ценностью ***#25292e***. Это меняет цвет фона.
3. Заменить значение по умолчанию <Text> с "Домашний экран".
5. Добавить a styles.text.color собственность для <Text> с ценностью ***#fff***(белый) для изменения цвета текста.

'''
import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

'''

Как только вы сохраняете свои изменения, они отправляются и применяются к запущенным приложениям, подключенным к серверу разработки.

## Добавить навигацию
### Основы экс-маршрутизатора
***Expo Router***  - это файловая система маршрутизации для React Native и веб-приложений. Он управляет навигацией между экранами и использует одни и те же компоненты на нескольких платформах. Чтобы начать работу, нам нужно знать о следующих конвенциях:

* ***Каталог приложений***: Специальный каталог, содержащий только маршруты и их макеты. Любые файлы, добавленные в этот каталог, становятся экраном в нашем родном приложении и страницей в Интернете. В шаблоне по умолчанию он расположен в src/app.
* ***Корневой макет*** : файл src/app/_layout.tsx. Он определяет общие элементы пользовательского интерфейса, такие как заголовки и панели вкладок, чтобы они были согласованы между различными маршрутами.
* ***Названия файлов Convention***: Индекс Файлы имен, такие как index.tsx, сопоставьте свой родительский каталог и не добавляйте сегмент пути. Например, к примеру, index.tsx Файл в src/приложение Справочник матчей / Маршрут.
* А ***маршрут*** Файл экспортирует компонент React в качестве его значения по умолчанию. Он может использовать любой .js, .jsx, .ts, или .tsx Расширение.
* Android, iOS и веб разделяют единую структуру навигации.

### Добавить новый экран в стек
Давайте создадим новый файл с именем **о.tsx** внутри **src/приложение** Каталог. Он отображает имя экрана, когда пользователь переходит к */about* Маршрут.

```
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

```

Внутри **src/app/_layout.tsx** :
1. Добавить <Stack.Screen /> Компонент и  options реквизит для обновления заголовка /about Маршрут.
2. Обновить /index Название маршрута на Home путем добавления options.

```
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}

```

### Навигация между экранами
1. Импортировать Link компонент из expo-router внутри **src/app/index.tsx**.
2. Добавить a Link компонент после <Text> компонент и пропуск href реквизит с /about Маршрут.
3. Добавить стиль fontSize, textDecorationLine, и color к Link компонент. Он принимает тот же реквизит, что и <Text> компонент.

```
import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

```

### Добавить не найденный маршрут
Когда маршрут не существует, мы можем использовать ***+not-found*** для отображения запасного экрана.
1. Создать новый файл с именем +not-found.tsx внутри src/приложение Каталог для добавления NotFoundScreen компонент.
2. Добавить options реквизит от Stack.Screen для отображения пользовательского заголовка экрана для этого маршрута.
3. Добавить a Link Компонент для перехода к / Маршрут, который является нашим запасным маршрутом.

```
import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
```

Чтобы проверить это, перейдите к ***http:localhost:8081/123*** URL в веб-браузере, так как там легко изменить путь URL. Приложение должно отображать *NotFoundScreen* компонент

### Добавить навигатор нижней вкладки
Мы добавим навигатор нижней вкладки в наше приложение и повторно используем существующие экраны Home и About для создания макета вкладки (общий шаблон навигации во многих приложениях социальных сетей, таких как X или BlueSky). Мы также будем использовать навигатор стека в макете Root, так что +not-found маршрут отображается над любыми другими вложенными навигаторами.

1. Внутри каталога **src/app** добавить **(вкладки)** подкаталог. Этот специальный каталог используется для группирования маршрутов вместе и отображения их в нижней строке вкладок.
2. Создайте файл **(tabs)/_layout.tsx** внутри каталога. Он будет использоваться для определения макета вкладки, который отделен от макета Root.
3. Переместите существующие файлы **index.tsx** и **about.tsx** в каталог (вкладки).

Обновите файл макета Root, чтобы добавить a (tabs) Маршрут:
```
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
```

Внутри (таблицы)/_layout.tsx, добавить a Tabs компонент для определения макет нижней вкладки:
```
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
    </Tabs>
  );
}
```

### Установить @expo/vector-icons
Чтобы установить *@expo/vector-icons* библиотека, остановите сервер разработки, нажав **Ctrl + C** в терминале, затем запустить следующую команду:
`npx expo install @expo/vector-icons`

### Обновление нижнего вкладки навигатора
Прямо сейчас нижний навигатор вкладки выглядит одинаково на всех платформах, но не соответствует стилю нашего приложения. Например, панель вкладки или заголовок не отображает пользовательский значок, а цвет фоновой вкладки нижней части не соответствует цвету фона приложения.

Измените файл src/app/(tabs)/_layout.tsx, чтобы добавить значки панели вкладок:

1. Импорт *Ionicons* Иконки набор из *@expo/vector-icons* — библиотека, включающая в себя популярные наборы значков.
2. Добавить *tabBarIcon* для обоих *index* и *about* Маршруты. Эта функция принимает focused и color как парам и отображает компонент значка. Из набора иконок мы можем предоставить пользовательские имена значков.
3. Добавить *screenOptions.tabBarActiveTintColor* к *Tabs* компонент и установить его значение для #ffd33d. Это изменит цвет значка икета вкладки и этикетку при активном.

```
import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
```

Давайте также изменим цвет фона панели вкладок и заголовка с помощью screenOptions реквизит:
```
<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}
>
```

## Создайте экран
### Разбейте экран
Есть два основных элемента:

* В центре экрана отображается большое изображение
* В нижней половине экрана есть две кнопки

Первая кнопка содержит несколько компонентов. Основополагающий элемент обеспечивает желтую границу и содержит значок и текстовые компоненты внутри ряда.

### Отобразить изображение
Мы будем использовать expo-image библиотека для отображения изображения в приложении. Он обеспечивает кроссплатформенную <Image> компонент для загрузки и визуализации изображения. Он уже включен в шаблон проекта по умолчанию, который мы используем.
Для использования компонента Изображения в src/app/(tabs)/index.tsx файл:

1. Импорт Image от expo-image Библиотека.
2. Создать a PlaceholderImage переменная для использования активы/images/background-image.png файл как source Опора на Image компонент.

```
import { View, StyleSheet } from 'react-native';
 import { Image } from 'expo-image'; 


const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
```
### Разделить компоненты на файлы
Давайте разделим код на несколько файлов, так как мы добавляем больше компонентов на этот экран. На протяжении всего этого урока мы будем использовать каталог компонентов для создания пользовательских компонентов.

1. Создайте каталог компонентов внутри src, а внутри него создайте файл image-viewer.tsx.
2. Переместить код, чтобы отобразить изображение в этом файле вместе с image Стили.
```
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
```
Импорт ***ImageViewer** и использовать его в src/app/(tabs)/index.tsx:
```
import { StyleSheet, View } from 'react-native';

import ImageViewer from '@/components/image-viewer'; 

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
});
```
### Создать кнопки с помощью прессов
В дизайне есть две кнопки, которые нам нужно создать. Каждый из них имеет свой стиль и этикетку. Давайте начнем с создания многоразового компонента для этих кнопок. Создайте файл **button.tsx** внутри каталога **src/components** с помощью следующего кода:
```
import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
```
Приложение отображает оповещение, когда пользователь нажимает любую из кнопок на экране. Это происходит потому, что <Pressable> звонки *alert()* на его *onPress*. Давайте импортируем этот компонент в **src/app/(tabs)/index.tsx** файл и добавить стили для <View> которые инкапсулируют эти кнопки:
```
import { View, StyleSheet } from 'react-native';

import Button from '@/components/button'; 
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
```
### Улучшить многоразовый компонент кнопки
Кнопка ***«Выберите фотографию»*** требует другого стиля, чем кнопка ***«Использовать эту фотографию»***, поэтому мы добавим новый реквизит кнопки, который позволит нам применять *primary* Тема. Эта кнопка также имеет иконку перед этикеткой. Мы будем использовать иконку из *@expo/vector-icons* Библиотека.

Чтобы загрузить и отобразить значок на кнопке, давайте использовать FontAwesome Из библиотеки.
```
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={() => alert('You pressed a button.')}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
```

А теперь, измените **src/app/(tabs)/index.tsx** файл для использования *theme="primary"* Реквизит на первой кнопке.
```
import { View, StyleSheet } from 'react-native';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
```
## Использовать сборщик изображений
### Установить expo-image-Picker
Чтобы установить expo-image-picker библиотека, остановите сервер разработки, нажав **Ctrl + C** в терминале, затем запустить следующую команду:
`npx expo install expo-image-picker`
### Выберите изображение из медиа-библиотеки устройства
*expo-image-picker* обеспечивает *launchImageLibraryAsync()* способ отображения пользовательского интерфейса системы путем выбора изображения или видео из медиа-библиотеки устройства. Мы будем использовать основную тематическую кнопку, созданную в предыдущей главе, чтобы выбрать изображение из медиа-библиотеки устройства и создать функцию для запуска библиотеки изображений устройства для реализации этой функции.

В **src/app/(tabs)/index.tsx**, импорт *expo-image-picker* библиотека и создать *pickImageAsync()* внутри *Index* компонент:
```
// ...rest of the import statements remain unchanged
 import * as ImagePicker from 'expo-image-picker';

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  // ...rest of the code remains same
}
```
### Обновите компонент кнопки
При нажатии основной кнопки мы позвоним *pickImageAsync()* на *Button* компонент. Обновить *onPress* реквизит *Button* компонент в **src/components/button.tsx**:
```
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
```
В **src/app/(tabs)/index.tsx**, добавить *pickImageAsync()* Функция для *onPress* реквизит на первом <Button>.
```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
```
### Использовать выбранное изображение
The result Объект обеспечивает assets массив, который содержит uri Выбранное изображение. Давайте возьмем это значение из сборщика изображений и используем его, чтобы показать выбранное изображение в приложении.

Изменить файл src/app/(tbs)/index.tsx:

1. Объявить переменную состояния, называемую selectedImage с помощью useState Крюк от React. Мы будем использовать эту переменную состояния для удержания URI выбранного изображения.
2. Обновить pickImageAsync() функция для сохранения изображения URI в selectedImage Переменная состояния.
3. Пройти selectedImage В качестве опоры для ImageViewer компонент.
```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react';


import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
```
Пройти *selectedImage* для *ImageViewer* компонент для отображения выбранного изображения вместо образа заполнителя.

1. Изменить **src/components/image-viewer.tsx** файл, чтобы принять *selectedImage*.
2. Источник изображения становится длинным, поэтому давайте также переместим его в отдельную переменную, называемую *imageSource*.
3. Пропуск *imageSource* как ценность *source* на *Image*.

```
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
```

