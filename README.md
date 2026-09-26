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

# 🎨Создайте свое первое приложение
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


### 🔗Скачать активы
[Архив](https://docs.expo.dev/static/images/tutorial/sticker-smash-assets.zip) <- нажать для скачивания

После загрузки архива:

1. Расчистите архив и замените активы по умолчанию в your-project-name/assets/imagesкаталоге «Ваш-проект-имя/активы/изображения».
2. Откройте каталог проекта в редакторе кода или IDE.

### 🔁Запустить сценарий сброса-проекта
Давайте запустим reset-project скрипт для удаления кода шаблона:

`npm run reset-project`

После выполнения вышеуказанной команды в каталоге **src/app** осталось два файла (**index.tsx** и **_layout.tsx**). Предыдущие файлы из каталога **src** (включая компоненты, **константы** и **зацепки**) перемещаются в **диаграмму** по сценарию. Мы создадим наши собственные каталоги и составные файлы по мере продвижения.

### ▶Запуск приложения на мобильном и веб-сайте
В каталоге проекта запустите следующую команду для запуска сервера разработки с терминала:

`npx expo start`

После выполнения вышеуказанной команды:

1. Завершится сервер разработки, и вы увидите QR-код внутри окна терминала.
2. Сканируйте этот QR-код, чтобы открыть приложение на устройстве. На Android используйте опцию Expo Go > Scan QR-кода. На iOS используйте приложение камеры по умолчанию.
3. Чтобы запустить веб-приложение, нажмите W В терминале. Он откроет веб-приложение в веб-браузере по умолчанию.

### 🏠Редактировать индексный экран
**src/app/index.tsx** файл определяет текст, отображаемый на экране приложения. Это точка входа нашего приложения и выполняет, когда сервер разработки начинается. Он использует основные компоненты React Native, такие как <View> и <Text> для отображения фона и текста.

Давайте изменим экран src/app/index.tsx:

1. Импорт *StyleSheet* от *react-native* и создать a *styles* Возражает, чтобы определить наши пользовательские стили.
2. Добавить *styles.container.backgroundColor* собственность для <View> с ценностью ***#25292e***. Это меняет цвет фона.
3. Заменить значение по умолчанию <Text> с "Домашний экран".
5. Добавить a styles.text.color собственность для <Text> с ценностью ***#fff***(белый) для изменения цвета текста.

```
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
```

Как только вы сохраняете свои изменения, они отправляются и применяются к запущенным приложениям, подключенным к серверу разработки.


## ⌚Добавить навигацию
### 📕Основы экс-маршрутизатора
***Expo Router***  - это файловая система маршрутизации для React Native и веб-приложений. Он управляет навигацией между экранами и использует одни и те же компоненты на нескольких платформах. Чтобы начать работу, нам нужно знать о следующих конвенциях:

* ***Каталог приложений***: Специальный каталог, содержащий только маршруты и их макеты. Любые файлы, добавленные в этот каталог, становятся экраном в нашем родном приложении и страницей в Интернете. В шаблоне по умолчанию он расположен в src/app.
* ***Корневой макет*** : файл src/app/_layout.tsx. Он определяет общие элементы пользовательского интерфейса, такие как заголовки и панели вкладок, чтобы они были согласованы между различными маршрутами.
* ***Названия файлов Convention***: Индекс Файлы имен, такие как index.tsx, сопоставьте свой родительский каталог и не добавляйте сегмент пути. Например, к примеру, index.tsx Файл в src/приложение Справочник матчей / Маршрут.
* ***маршрут*** Файл экспортирует компонент React в качестве его значения по умолчанию. Он может использовать любой .js, .jsx, .ts, или .tsx Расширение.
* Android, iOS и веб разделяют единую структуру навигации.


### ➕Добавить новый экран в стек
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


### 📍Навигация между экранами
1. Импортировать Link компонент из expo-router внутри **src/app/index.tsx**.
2. Добавить a Link компонент после <Text> компонент и пропуск href реквизит с /about Маршрут.
3. Добавить стиль fontSize, textDecorationLine, и color к Link компонент. Он принимает тот же реквизит, что и <Text> компонент.

<details>
<summary>Показать код</summary>


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

</details>


### ❌Добавить не найденный маршрут
Когда маршрут не существует, мы можем использовать ***+not-found*** для отображения запасного экрана.
1. Создать новый файл с именем +not-found.tsx внутри src/приложение Каталог для добавления NotFoundScreen компонент.
2. Добавить options реквизит от Stack.Screen для отображения пользовательского заголовка экрана для этого маршрута.
3. Добавить a Link Компонент для перехода к / Маршрут, который является нашим запасным маршрутом.


<details>
<summary>Показать код</summary>

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

</details>

Чтобы проверить это, перейдите к ***http:localhost:8081/123*** URL в веб-браузере, так как там легко изменить путь URL. Приложение должно отображать *NotFoundScreen* компонент


### 📑Добавить навигатор нижней вкладки
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

### 🎨Установить @expo/vector-icons
Чтобы установить *@expo/vector-icons* библиотека, остановите сервер разработки, нажав **Ctrl + C** в терминале, затем запустить следующую команду:
`npx expo install @expo/vector-icons`


### ⭐Обновление нижнего вкладки навигатора
Прямо сейчас нижний навигатор вкладки выглядит одинаково на всех платформах, но не соответствует стилю нашего приложения. Например, панель вкладки или заголовок не отображает пользовательский значок, а цвет фоновой вкладки нижней части не соответствует цвету фона приложения.

Измените файл src/app/(tabs)/_layout.tsx, чтобы добавить значки панели вкладок:

1. Импорт *Ionicons* Иконки набор из *@expo/vector-icons* — библиотека, включающая в себя популярные наборы значков.
2. Добавить *tabBarIcon* для обоих *index* и *about* Маршруты. Эта функция принимает focused и color как парам и отображает компонент значка. Из набора иконок мы можем предоставить пользовательские имена значков.
3. Добавить *screenOptions.tabBarActiveTintColor* к *Tabs* компонент и установить его значение для #ffd33d. Это изменит цвет значка икета вкладки и этикетку при активном.


<details>
<summary>Показать код</summary>

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

</details>

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


## 💻Создайте экран
### 🧩Разбейте экран
Есть два основных элемента:

* В центре экрана отображается большое изображение
* В нижней половине экрана есть две кнопки

Первая кнопка содержит несколько компонентов. Основополагающий элемент обеспечивает желтую границу и содержит значок и текстовые компоненты внутри ряда.

### 🤲Отобразить изображение
Мы будем использовать expo-image библиотека для отображения изображения в приложении. Он обеспечивает кроссплатформенную <Image> компонент для загрузки и визуализации изображения. Он уже включен в шаблон проекта по умолчанию, который мы используем.
Для использования компонента Изображения в src/app/(tabs)/index.tsx файл:

1. Импорт Image от expo-image Библиотека.
2. Создать a PlaceholderImage переменная для использования активы/images/background-image.png файл как source Опора на Image компонент.


<details>
<summary>Показать код</summary>

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

</details>

### ✂Разделить компоненты на файлы
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
### 🖱Создать кнопки с помощью прессов
В дизайне есть две кнопки, которые нам нужно создать. Каждый из них имеет свой стиль и этикетку. Давайте начнем с создания многоразового компонента для этих кнопок. Создайте файл **button.tsx** внутри каталога **src/components** с помощью следующего кода:

<details>
<summary>Показать код</summary>

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

</details>

Приложение отображает оповещение, когда пользователь нажимает любую из кнопок на экране. Это происходит потому, что <Pressable> звонки *alert()* на его *onPress*. Давайте импортируем этот компонент в **src/app/(tabs)/index.tsx** файл и добавить стили для <View> которые инкапсулируют эти кнопки:

<details>
<summary>Показать код</summary>

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

</details>

### 🎇Улучшить многоразовый компонент кнопки
Кнопка ***«Выберите фотографию»*** требует другого стиля, чем кнопка ***«Использовать эту фотографию»***, поэтому мы добавим новый реквизит кнопки, который позволит нам применять *primary* Тема. Эта кнопка также имеет иконку перед этикеткой. Мы будем использовать иконку из *@expo/vector-icons* Библиотека.

Чтобы загрузить и отобразить значок на кнопке, давайте использовать FontAwesome Из библиотеки.

<details>
<summary>Показать код</summary>

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

</details>

А теперь, измените **src/app/(tabs)/index.tsx** файл для использования *theme="primary"* Реквизит на первой кнопке.

<details>
<summary>Показать код</summary>

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

</details>

## 🎞Использовать сборщик изображений
### 💻Установить expo-image-Picker
Чтобы установить expo-image-picker библиотека, остановите сервер разработки, нажав **Ctrl + C** в терминале, затем запустить следующую команду:
`npx expo install expo-image-picker`
### 📚Выберите изображение из медиа-библиотеки устройства
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
### 🔃Обновите компонент кнопки
При нажатии основной кнопки мы позвоним *pickImageAsync()* на *Button* компонент. Обновить *onPress* реквизит *Button* компонент в **src/components/button.tsx**:

<details>
<summary>Показать код</summary>

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

</details>

В **src/app/(tabs)/index.tsx**, добавить *pickImageAsync()* Функция для *onPress* реквизит на первом <Button>.

<details>
<summary>Показать код</summary>

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

</details>

### 🖼Использовать выбранное изображение
The result Объект обеспечивает assets массив, который содержит uri Выбранное изображение. Давайте возьмем это значение из сборщика изображений и используем его, чтобы показать выбранное изображение в приложении.

Изменить файл src/app/(tbs)/index.tsx:

1. Объявить переменную состояния, называемую selectedImage с помощью useState Крюк от React. Мы будем использовать эту переменную состояния для удержания URI выбранного изображения.
2. Обновить pickImageAsync() функция для сохранения изображения URI в selectedImage Переменная состояния.
3. Пройти selectedImage В качестве опоры для ImageViewer компонент.

<details>
<summary>Показать код</summary>

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

</details>

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
## 🔨Создать модаль
### 🔄Объявить переменную состояния для отображения кнопок
Перед реализацией модала мы собираемся добавить три новые кнопки. Эти кнопки видны после того, как пользователь выбирает изображение из медиа-библиотеки или использует образ заполнителя. Одна из этих кнопок запустит модаль сборщика смайликов.

В **src/app/(tbs)/index.tsx** :

1. Объявить переменную булева состояния, *showAppOptions*, чтобы показать или скрыть кнопки, которые открывают модаль, наряду с несколькими другими вариантами. Когда экран приложения загружается, мы настроим его *false* Таким образом, опции не отображаются перед выбором изображения. Когда пользователь выбирает изображение или использует образ заполнителя, мы установим его *true*.
2. Обновить *pickImageAsync()* функция для установления значения *showAppOptions* к *true* После того, как пользователь выбирает изображение.
3. Обновите кнопку без темы, добавив onPress реквизит со следующим значением.

<details>
<summary>Показать код</summary>

```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
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

</details>

Теперь мы можем удалить alert на Button компонент и обновление onPress реквизит при рендеринге второй кнопки в src/components/button.tsx:
`<Pressable style={styles.button}  onPress={onPress}>`
### 🕳Добавить кнопки
Внутри каталога **src/components** создайте новый файл **circle-button.tsx** со следующим кодом:

<details>
<summary>Показать код</summary>

```
import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});
```
</details>


Создать именованный файл **icon-button.tsx** внутри **src/компоненты** Каталог. Этот компонент принимает три реквизита:

  * icon: имя, соответствующее *MaterialIcons* Икона библиотеки.
  * label: текстовая этикетка, отображаемая на кнопке.
  * onPress: эта функция вызывает, когда пользователь нажимает кнопку.

<details>
<summary>Показать код</summary>

```
import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
```

</details>

Внутренний **src/app/(tbs)/index.tsx** :

  1. Импортировать *CircleButton* и *IconButton* Компоненты для их отображения.
  2. Добавьте три функции заполнителя для этих кнопок. *onReset()* функции вызывают, когда пользователь нажимает кнопку сброса, в результате чего кнопка выбора изображения снова появляется. Мы добавим функциональность для двух других функций позже.

<details>
<summary>Показать код</summary>

```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

</details>

### 😝Создать модаль сборщика смайликов
Модаль позволяет пользователю выбрать эмодзи из списка доступных эмодзи. Создайте файл **emoji-picker.tsx** внутри каталога **src/components**. Этот компонент принимает три реквизита:

  * isVisible: бульон для определения состояния видимости модала.
  * onClose: функция, чтобы закрыть модаль.
  * children: используется позже для отображения списка эмодзи.

<details>
<summary>Показать код</summary>

```
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
```

</details>

Теперь давайте изменим **src/app/(tabs)/index.tsx** :

  1. Импортировать <EmojiPicker> компонент.
  2. Создать *isModalVisible* переменная состояния с *useState*. Его значение по умолчанию является *false*, который скрывает модаль, пока пользователь не нажмет кнопку, чтобы открыть его.
  3. Заменить комментарий в *onAddSticker()* функция для обновления *isModalVisible* переменная для *true* когда пользователь нажимает кнопку. Это откроет сборщик смайликов.
  4. Создать *onModalClose()* функция для обновления *isModalVisible* Переменная состояния.
  5. Поместите <EmojiPicker> Компонент в нижней части *Index* компонент.


<details>
<summary>Показать код</summary>

```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';

import EmojiPicker from '@/components/emoji-picker';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* Emoji list component will go here */}
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

</details>

### 📃Показать список смайликов
Давайте добавим горизонтальный список эмодзи в содержимое модала. Мы будем использовать <FlatList> Компонент от React Native для него.

Создайте файл **emoji-list.tsx** в каталоге **src/components** и добавьте следующий код:

<details>
<summary>Показать код</summary>

```
import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("@/assets/images/emoji1.png"),
    require("@/assets/images/emoji2.png"),
    require("@/assets/images/emoji3.png"),
    require("@/assets/images/emoji4.png"),
    require("@/assets/images/emoji5.png"),
    require("@/assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
```

</details>

Теперь обновите **src/app/(tabs)/index.tsx** Чтобы импортировать <EmojiList> компонент и замена комментариев внутри <EmojiPicker> компонент со следующим фрагментом кода:

<details>
<summary>Показать код</summary>

```
import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';

import EmojiList from '@/components/emoji-list';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

</details>

### 🎃Отобразить выбранный emoji
Теперь мы поместим наклейку смайлика на изображение. Создайте новый файл в каталоге **src/components** и назовите его **emoji-sticker.tsx.** Затем добавьте следующий код:

```
import { ImageSourcePropType, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}
```
Импортировать этот компонент в **src/app/(tabs)/index.tsx** Файл и обновить *Index* компонент для отображения наклейки emoji на изображении. Мы проверим, *pickedEmoji* не является *undefined*:

<details>
<summary>Показать код</summary>

```
import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';
import EmojiList from '@/components/emoji-list';
import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

</details>

## 🖐Добавить жесты
### 🤝Добавить ЖестОбработчикРужникПросмотр
Чтобы получить взаимодействие жестов для работы в приложении, мы вернемся *<GestureHandlerRootView>* от *react-native-gesture-handler* на вершине *Index* компонент. Заменить уровень корней <View> компонент в **src/app/(tabs)/index.tsx** с *<GestureHandlerRootView>*.
```
// ... rest of the import statements remain same
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* ...rest of the code remains */}
    </GestureHandlerRootView>
  )
}
```
### 🌌Используйте анимированные компоненты
*Animated* Компонент смотрит на *style* реквизит компонента и определяет, какие значения анимировать и применять обновления для создания анимации. Реанимированный экспорт анимированных компонентов, таких как <Animated.View>, <Animated.Text>, или <Animated.ScrollView>. Мы будем применять анимацию к <Animated.Image> компонент, чтобы сделать двойной жест нажатия работает.

  1. Откройте emoji-sticker.tsx Файл в src/компоненты Каталог. Внутри него, импортировать Animated от react-native-reanimated библиотека для использования анимированных компонентов.
  2. Заменить Image компонент с <Animated.Image>.
```
import { ImageSourcePropType, View } from 'react-native';
import Animated from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
```
### ☝Добавить жест нажатия
*React Native Gesture Handler* позволяет нам добавлять поведение, когда он обнаруживает сенсорный ввод, например, двойное нажатие.

В ***src/components/emioji-sticker.tsx*** файле:

  1. Импорт *Gesture* и *GestureDetector* от *react-native-gesture-handler*.
  2. Чтобы распознать кран на наклейке, импортируйте *useAnimatedStyle*, *useSharedValue*, и *withSpring* от 8react-native-reanimated* чтобы оживить стиль <Animated.Image>.
  3. Внутри *EmojiSticker* компонент, создать ссылку, называемую *scaleImage* с помощью *useSharedValue*() Крюк. Это возьмет на себя ценность *imageSize* В качестве его первоначального значения.
```
// ...rest of the import statements remain same
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);

  return (
    // ...rest of the code remains same
  )
}
```


Создать следующий объект в *EmojiSticker* компонент:

```
const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2);
    }
  });
```


а изображении наклейки, мы будем использовать *useAnimatedStyle*() Крюк для создания объекта стиля. Это поможет нам обновлять стили, используя общие значения, когда происходит анимация. Мы также масштабируем размер изображения, манипулируя width и *height* свойства. Первоначальные значения этих свойств устанавливаются на *imageSize*.

Создать a *imageStyle* переменная и добавить ее в *EmojiSticker* компонент:


```const imageStyle = useAnimatedStyle(() => {
  return {
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  };
});
```


Далее, оберните <Animated.Image> Компонент с <GestureDetector> и изменить *style* Опора на <Animated.Image> чтобы пройти *imageStyle*.

<details>
<summary>Показать код</summary>

```
import { ImageSourcePropType, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <View style={{ top: -350 }}>
       <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[{ width: imageSize, height: imageSize }, imageStyle]}
        />
      </GestureDetector>
    </View>
  );
}
```

</details>

### Добавить жест сковороды
Чтобы распознать жест перетаскивания на наклейке и отследить ее движение, мы будем использовать жест сковороды. В **src/components/emoidji-sticker.tsx** :

  1. Создайте две новые общие ценности: *translateX* и *translateY*.
  2. Заменить <View> с <Animated.View> компонент.

<details>
<summary>Показать код</summary>

```export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  // ...rest of the code remains same

  return (
    <Animated.View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        {/* ...rest of the code remains same */}
      </GestureDetector>
    </Animated.View>
  );
}
```

</details>

На предыдущем шаге мы спровоцировали *onStart*() обратный звонок для жеста крана, прикованного к *Gesture.Tap()* Метод. Для жеста сковороды укажите *onChange*() обратный звонок, который проходит, когда жест активен и движется.

  1. Создать a *drag* объект, чтобы справиться с жестом сковороды. The *onChange*() обратный звонок принимает *event* в качестве параметра. *changeX* и *changeY* свойства удерживают изменение позиции с момента последнего события и обновляют значения, хранящиеся в *translateX* и *translateY*.
  2. Определить *containerStyle* Объект, использующий *useAnimatedStyle()* Крюк. Это вернет множество преобразований. Для <Animated.View> компонент, нам нужно установить transform Имущество для *translateX* и *translateY* Ценности. Это изменит положение наклейки, когда жест активен.

<details>
<summary>Показать код</summary>

```
const drag = Gesture.Pan().onChange(event => {
  translateX.value += event.changeX;
  translateY.value += event.changeY;
});

const containerStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  };
});
```

</details>

Далее, внутри кода JSX:

  1. Обновить <EmojiSticker> Компонент, чтобы <GestureDetector> Компонент становится компонентом верхнего уровня.
  2. Добавить *containerStyle* на <Animated.View> Компонент для применения стилей трансформации.

<details>
<summary>Показать код</summary>

```
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ImageSourcePropType } from 'react-native';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange(event => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[{ width: imageSize, height: imageSize }, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
```

</details>

## 📱Сделать скриншот
### 📚Установить библиотеки
Установить **react-native-view-shot** и **expo-media-library**, выполните следующие команды:
`npx expo install react-native-view-shot expo-media-library`
### ❓Подсказка для разрешений
Приложение, которое требует конфиденциальной информации, такой как доступ к медиатеке устройства, должно получить разрешение на доступ или запретить доступ. Использовать *useMediaLibraryPermissions()* Крюк от *expo-image-picker*, мы можем использовать разрешение *permissionResponse* и *requestPermission*() Способ запросить доступ. Этот крючок запрашивает как разрешения на чтение, так и запись, которые охватывают выбор изображений из библиотеки и сохранение скриншотов к ней.

Добавьте следующий фрагмент кода внутрь src/app/(tabs)/index.tsx:

<details>
<summary>Показать код</summary>

```
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

// ...rest of the code remains same

export default function Index() {
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // ...rest of the code remains same

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  // ...rest of the code remains same
}
```

</details>

### ✅Создайте референт для сохранения текущего представления
Мы будем использовать *react-native-view-shot* чтобы позволить пользователю сделать снимок экрана в приложении. Эта библиотека захватывает скриншот <View> как изображение с использованием *captureRef*() Метод. Он возвращает URI захваченного файла снимков скриншота.

  1. Импорт *captureRef* от *react-native-view-shot* и *useRef* От *React*.
  2. Создать a *imageRef* эталонная переменная для хранения ссылки на снимок экрана, захваченного изображения.
  3. Обернуть <ImageViewer> и <EmojiSticker> Компоненты внутри a <View> а затем передать ему справочную переменную.

<details>
<summary>Показать код</summary>

```
import { useState, useRef } from 'react';
import { captureRef } from 'react-native-view-shot';

export default function Index() {
   const imageRef = useRef<View>(null);

  // ...rest of the code remains same

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {/* ...rest of the code remains same */}
    </GestureHandlerRootView>
  );
}
```

</details>

### 🆗Снимите скриншот и сохраните его
Внутри **src/app/(tabs)/index.tsx**, обновить *onSaveImageAsync*() Функция со следующим кодом:

<details>
<summary>Показать код</summary>

```
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

import Button from '@/components/button';
import CircleButton from '@/components/circle-button';
import EmojiList from '@/components/emoji-list';
import EmojiPicker from '@/components/emoji-picker';
import IconButton from '@/components/icon-button';
import ImageViewer from '@/components/image-viewer';

import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

</details>

## ❗Обработка различий платформы
### ➡Установить и импортировать dom-to-image
Чтобы запечатлеть снимок экрана в Интернете и сохранить его в качестве изображения, мы будем использовать стороннюю библиотеку под названием *dom-to-image*. Он берет скриншот любого узла DOM и превращает его в векторный (SVG) или растровый (PNG или JPEG) изображение.

Остановите сервер разработки и выполните следующую команду для установки библиотеки:
`npm install dom-to-image`
### 🎓Добавить код, специфичный для платформы
Использовать *Platform* модуль от *React Native*, мы можем реализовать платформу специфическое поведение. Внутри **src/app/(tabs)/index.tsx**:

  1. Импортировать *Platform* Модуль от *react-native*.
  2. Импортировать *domtoimage* библиотека от *dom-to-image*.
  3. Обновить *onSaveImageAsync*() функция, чтобы проверить, является ли текущая платформа 'web' с *Platform*.OS собственность. Если это так 'web', мы будем использовать *domtoimage.toJpeg*() способ преобразования и захвата тока <View> В качестве изображения JPEG. В противном случае мы будем продолжать использовать ту же логику, добавленную для собственных платформ.

<details>
<summary>Показать код</summary>

```
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, View, StyleSheet, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';
import EmojiList from '@/components/emoji-list';
import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

</details>

## 🌊Настройка панели состояния, экрана брызг и значка приложения 
### 🌫Настройка строки состояния
*expo-status-bar* библиотека предустановлена в каждом проекте, созданном с использованием *create-expo-app*. Эта библиотека предоставляет *StatusBar* компонент для настройки стиля стенд состояния приложения.

Внутри **src/app/_layout.tsx** :

  1. Импорт *StatusBar* от *expo-status-bar*.
  2. Группа The *StatusBar* и существующих *Stack* компоненты с Компонент Фрагмента *React*.

<details>
<summary>Показать код</summary>

```
import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
```

</details>

### ⭕Иконка приложения
Как и изображение всплеска экрана, "icon" собственность в app.json файл настраивает путь значка приложения. По умолчанию новый проект Expo определяет правильный путь ***"./assets/images/icon.png"***. Нам не нужно ничего менять.
### 💫Всплеск экрана
Экран брызг виден до загрузки контента приложения. Он использует меньший образ, такой как значок приложения, который центрирован. Он скрывается, как только контент приложения готов к отображению.

*expo-splash-screen* Плагин уже поставляется предустановленным в каждом созданном проекте *create-expo-app*. Эта библиотека предоставляет плагин конфигурирования для настройки экрана брызг.

В app.json, *expo-splash-screen* плагин уже настроен на использование значка приложения в качестве изображения экрана брызг (предоставлено в загружаемые активы) со следующим фрагментом, поэтому нам не нужно ничего менять:

<details>
<summary>Показать код</summary>

```tsx
{
  "plugins": [
    [
      "expo-splash-screen",
      {
        "image": "./assets/images/splash-icon.png"
      }
    ]
  ]
}
```

</details>

Однако для тестирования экрана брызг мы **не можем использовать Expo Go или сборку разработки**. Чтобы протестировать его, нам нужно создать предварительный просмотр или производственную сборку нашего приложения.

# JavaScript
### Что такое JavaScript?
Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми».
Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.
Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.
Это отличает JavaScript от другого языка – Java.
Разные движки имеют разные «кодовые имена». Например:

  * V8 – в Chrome, Opera и Edge.
  * SpiderMonkey – в Firefox.
  * …Ещё есть «Chakra» для IE, «JavaScriptCore», «Nitro» и «SquirrelFish» для Safari и т.д.
### Что может JavaScript в браузере?
В браузере для JavaScript доступно всё, что связано с манипулированием веб-страницами, взаимодействием с пользователем и веб-сервером.
Например, в браузере JavaScript может:

  * Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.
  * Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.
  * Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии AJAX и COMET).
  * Получать и устанавливать куки, задавать вопросы посетителю, показывать сообщения.
  * Запоминать данные на стороне клиента («local storage»).
### Чего НЕ может JavaScript в браузере?
Возможности JavaScript в браузере ограничены ради безопасности пользователя.
Примеры таких ограничений включают в себя:

  * JavaScript на веб-странице не может читать/записывать произвольные файлы на жёстком диске, копировать их или запускать программы. Он не имеет прямого доступа к системным функциям ОС.
  * Различные окна/вкладки не знают друг о друге. Иногда одно окно, используя JavaScript, открывает другое окно. Но даже в этом случае JavaScript с одной страницы не имеет доступа к другой, если они пришли с разных сайтов (с другого домена, протокола или порта).Это называется «Политика одинакового источника» (Same Origin Policy).
  * JavaScript может легко взаимодействовать с сервером, с которого пришла текущая страница. Но его способность получать данные с других сайтов/доменов ограничена. Хотя это возможно в принципе, для чего требуется явное согласие (выраженное в заголовках HTTP) с удалённой стороной.
### Что делает JavaScript особенным?
Как минимум, три сильные стороны JavaScript:

  * Полная интеграция с HTML/CSS.
  * Простые вещи делаются просто.
  * Поддерживается всеми основными браузерами и включён по умолчанию.
JavaScript – это единственная браузерная технология, сочетающая в себе все эти три вещи.
### Языки «над» JavaScript
Синтаксис JavaScript подходит не под все нужды. Разные люди хотят иметь разные возможности. 
Так, в последнее время появилось много новых языков, которые транспилируются (конвертируются) в JavaScript, прежде чем запустятся в браузере.
Примеры таких языков:

  * ***CoffeeScript*** добавляет «синтаксический сахар» для JavaScript. Он вводит более короткий синтаксис, который позволяет писать чистый и лаконичный код. Обычно такое нравится Ruby-программистам.
  * ***TypeScript*** концентрируется на добавлении «строгой типизации» для упрощения разработки и поддержки больших и сложных систем. Разработан Microsoft.
  * ***Flow*** тоже добавляет типизацию, но иначе. Разработан Facebook.
  * ***Dart*** стоит особняком, потому что имеет собственный движок, работающий вне браузера (например, в мобильных приложениях). Первоначально был предложен Google, как замена JavaScript, но на данный момент необходима его транспиляция для запуска так же, как для вышеперечисленных языков.
  * ***Brython*** транспилирует Python в JavaScript, что позволяет писать приложения на чистом Python без JavaScript.

## Справочники и спецификации
### Спецификация
**[Спецификация ECMA-262](https://tc39.es/ecma262/ "Ссылка на спецификацию")** содержит самую глубокую, детальную и формализованную информацию о JavaScript. Она определяет сам язык.
Вначале спецификация может показаться тяжеловатой для понимания из-за слишком формального стиля изложения.

### Справочники
**[MDN (Mozilla) JavaScript Reference](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference "Ссылка на справочник")** – это справочник с примерами и другой информацией. Хороший источник для получения подробных сведений о функциях языка, методах встроенных объектов и так далее.

### Таблицы совместимости
JavaScript – это развивающийся язык, в который постоянно добавляется что-то новое.
Посмотреть, какие возможности поддерживаются в разных браузерах и других движках, можно в следующих источниках:

  * https://caniuse.com – таблицы с информацией о поддержке по каждой возможности языка. Например, чтобы узнать, какие движки поддерживают современные криптографические функции, посетите: https://caniuse.com/#feat=cryptography.
  * https://kangax.github.io/compat-table – таблица с возможностями языка и движками, которые их поддерживают и не поддерживают.

## Редакторы кода
### IDE
***Термином IDE*** (Integrated Development Environment, «интегрированная среда разработки») называют мощные редакторы с множеством функций, которые работают в рамках целого проекта. 
IDE загружает проект (который может состоять из множества файлов), позволяет переключаться между файлами, предлагает автодополнение по коду всего проекта (а не только открытого файла), также она интегрирована с системой контроля версий (например, такой как git), средой для тестирования и другими инструментами на уровне всего проекта.

### «Лёгкие» редакторы
***«Лёгкие» редакторы*** менее мощные, чем IDE, но они отличаются скоростью, удобным интерфейсом и простотой.
В основном их используют для того, чтобы быстро открыть и отредактировать нужный файл.
На практике «лёгкие» редакторы могут иметь множество плагинов, включая автодополнение и анализаторы синтаксиса на уровне директории, поэтому границы между IDE и «лёгкими» редакторами размыты.
Следующие варианты заслуживают вашего внимания:

  * **Sublime Text** (кроссплатформенный, условно-бесплатный).
  * **Notepad++** (Windows, бесплатный).
  * **Vim** и **Emacs** тоже хороши, если знать, как ими пользоваться.

## Консоль разработчика
Код уязвим для ошибок. И вы, скорее всего, будете делать ошибки в коде… Но по умолчанию в браузере ошибки не видны. То есть, если что-то пойдёт не так, мы не увидим, что именно сломалось, и не сможем это починить. Для решения задач такого рода в браузер встроены так называемые **«Инструменты разработки»** (Developer tools или сокращённо — devtools).

### Google Chrome
Откройте страницу [bug.html](https://learn.javascript.ru/article/devtools/bug.html).
В её JavaScript-коде закралась ошибка. Она не видна обычному посетителю, поэтому давайте найдём её при помощи инструментов разработки.
Нажмите **F12** или, если вы используете Mac, **Cmd+Opt+J**.
По умолчанию в инструментах разработчика откроется вкладка Console (консоль).

  * В консоли мы можем увидеть сообщение об ошибке, отрисованное красным цветом. В нашем случае скрипт содержит неизвестную команду *«lalala»*.
  * Справа присутствует ссылка на исходный код *bug.html:12* с номером строки кода, в которой эта ошибка и произошла.

Под сообщением об ошибке находится синий символ *>*. Он обозначает командную строку, в ней мы можем редактировать и запускать JavaScript-команды. Для их запуска нажмите **Enter**.
Теперь мы явно видим ошибки, для начала этого вполне достаточно. 

### Firefox, Edge и другие
Инструменты разработчика в большинстве браузеров открываются при нажатии на **F12**.
Их внешний вид и принципы работы мало чем отличаются. Разобравшись с инструментами в одном браузере, вы без труда сможете работать с ними и в другом.

### Safari
Safari (браузер для Mac, не поддерживается в системах Windows/Linux) всё же имеет небольшое отличие. Для начала работы нам нужно включить **«Меню разработки»** («Developer menu»).
Откройте **Настройки** (Preferences) и перейдите к панели **«Продвинутые»** (Advanced). В самом низу вы найдёте чекбокс
Теперь консоль можно активировать нажатием клавиш ***Cmd+Opt+C***. 

# Основы JavaScript
## Привет, мир!
### Тег «script»
Программы на JavaScript могут быть вставлены в любое место HTML-документа с помощью тега <script>

Для примера:
```
<!DOCTYPE HTML>
<html>

<body>

  <p>Перед скриптом...</p>

  <script>
    alert( 'Привет, мир!' );
  </script>

  <p>...После скрипта.</p>

</body>

</html>
```
Вы можете запустить пример, нажав на кнопку «Play» в правом верхнем углу блока с кодом выше.

### Современная разметка
Тег <script> имеет несколько атрибутов, которые редко используются, но всё ещё могут встретиться в старом коде:
  * **Атрибут type: script type=…** 
    Старый стандарт HTML, HTML4, требовал наличия этого атрибута в теге <script>. Обычно он имел значение type="text/javascript". На текущий момент этого больше не требуется.
  * **Атрибут language: script language=…**
    Этот атрибут должен был задавать язык, на котором написан скрипт. Но так как JavaScript является языком по умолчанию, в этом атрибуте уже нет необходимости.
  * **Обёртывание скрипта в HTML-комментарии.**
    В очень древних книгах и руководствах вы сможете найти комментарии внутри тега <script>, например, такие:
    ```
    <script type="text/javascript"><!--
    ...
    //--></script>
    ```
    Этот комментарий скрывал код JavaScript в старых браузерах, которые не знали, как обрабатывать тег ***<script>.***

### Внешние скрипты
Если у вас много JavaScript-кода, вы можете поместить его в отдельный файл.
Файл скрипта можно подключить к HTML с помощью атрибута ***src***:
`<script src="/path/to/script.js"></script>`
Здесь **/path/to/script.js** – это абсолютный путь от корневой папки до необходимого файла. Корневой папкой может быть корень диска или корень сайта, в зависимости от условий работы сайта. Также можно указать относительный путь от текущей страницы. Например, **src="script.js"** или **src="./script.js"** будет означать, что файл *"script.js"* находится в текущей папке.

Можно указать и полный URL-адрес. Например:
`<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>`
Для подключения нескольких скриптов используйте несколько тегов:
```
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
```
**Если атрибут src установлен, содержимое тега script будет игнорироваться.**
В одном теге *script* нельзя использовать одновременно атрибут *src* и код внутри.
Нижеприведённый пример не работает:
```
<script src="file.js">
  alert(1); // содержимое игнорируется, так как есть атрибут src
</script>
```
Нужно выбрать: либо внешний скрипт *script src="…"*, либо обычный код внутри тега *script*.
Вышеприведённый пример можно разделить на два скрипта:
```
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

## Структура кода
### Инструкции
Инструкции – это синтаксические конструкции и команды, которые выполняют действия.
Мы уже видели инструкцию **alert('Привет, мир!')**, которая отображает сообщение **«Привет, мир!»**.
В нашем коде может быть столько инструкций, сколько мы захотим. Инструкции могут отделяться точкой с запятой.
Например, здесь мы разделили сообщение «Привет Мир» на два вызова alert:
`alert('Привет'); alert('Мир');`
Обычно каждую инструкцию пишут на новой строке, чтобы код было легче читать:
```
alert('Привет');
alert('Мир');
```

### Точка с запятой
В большинстве случаев точку с запятой можно не ставить, если есть переход на новую строку.
Так тоже будет работать:
```
alert('Привет')
alert('Мир')
```
В этом случае JavaScript интерпретирует перенос строки как «неявную» точку с запятой. Это называется **автоматическая вставка точки с запятой**.
В некоторых ситуациях новая строка всё же не означает точку с запятой. Например:
```
alert(3 +
1
+ 2);
```
Код выведет *6*, потому что JavaScript не вставляет здесь точку с запятой. Интуитивно очевидно, что, если строка заканчивается знаком "+", значит, это «незавершённое выражение», поэтому точка с запятой не требуется. И в этом случае всё работает, как задумано.

**Но есть ситуации, где JavaScript «забывает» вставить точку с запятой там, где она нужна.**
Мы рекомендуем ставить точку с запятой между инструкциями, даже если они отделены переносами строк.

### Комментарии
Однострочные комментарии начинаются с двойной косой черты **//**.
```
// Этот комментарий занимает всю строку
alert('Привет');
alert('Мир'); // Этот комментарий следует за инструкцией
```

Многострочные комментарии начинаются косой чертой со звёздочкой /* и заканчиваются звёздочкой с косой чертой */
```
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
alert('Привет');
alert('Мир');
```
Содержимое комментария игнорируется, поэтому, если мы поместим код внутри /* … */, он не будет исполняться.
Это бывает удобно для временного отключения участка кода:
```
/* Закомментировали код
alert('Привет');
*/
alert('Мир');
```

## Строгий режим — "use strict"
Чтобы устаревший код работал, как и раньше, по умолчанию подобные изменения не применяются. Поэтому нам нужно явно их активировать с помощью специальной директивы: **"use strict"**
### «use strict»
Директива выглядит как строка: "use strict" или 'use strict'. Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.
```
"use strict";

// этот код работает в современном режиме
...
```
### Консоль браузера
В дальнейшем, когда вы будете использовать консоль браузера для тестирования функций, обратите внимание, что *use strict* по умолчанию в ней выключен.
Иногда, когда *use strict* имеет значение, вы можете получить неправильные результаты.
Итак, как можно включить *use strict* в консоли?
Можно использовать **Shift+Enter** для ввода нескольких строк и написать в верхней строке *use strict*:
```
'use strict'; <Shift+Enter для перехода на новую строку>
//  ...ваш код...
<Enter для запуска>
```
В большинстве браузеров, включая Chrome и Firefox, это работает.
Если этого не происходит, например, в старом браузере, есть некрасивый, но надежный способ обеспечить use strict. Поместите его в следующую обёртку:
```
(function() {
  'use strict';

  // ...ваш код...
})()
```
### Всегда ли нужно использовать «use strict»?
**пока очень желательно добавлять "use strict"; в начале ваших скриптов. Позже, когда весь ваш код будет состоять из классов и модулей, директиву можно будет опускать.**

## Переменные
Переменная – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.
Для создания переменной в JavaScript используйте ключевое слово ***let***.
`let message;`
еперь можно поместить в неё данные (другими словами, определить переменную), используя оператор присваивания =:
```
let message;

message = 'Hello'; // сохранить строку 'Hello' в переменной с именем message
```
Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:
```
let message;
message = 'Hello!';
alert(message); // показывает содержимое переменной
```
Для краткости можно совместить объявление переменной и запись данных в одну строку:
```
let message = 'Hello!'; // определяем переменную и присваиваем ей значение
alert(message); // Hello!
```
Мы также можем объявить несколько переменных в одной строке:
`let user = 'John', age = 25, message = 'Hello';`
Некоторые люди также определяют несколько переменных в таком вот многострочном стиле:
```
let user = 'John',
  age = 25,
  message = 'Hello';
```
В принципе, все эти варианты работают одинаково. Так что это вопрос личного вкуса и эстетики.

### Аналогия из жизни
Например, переменную message можно представить как коробку с названием "message" и значением "Hello!" внутри
Мы можем положить любое значение в коробку.
Мы также можем изменить его столько раз, сколько захотим:
```
let message;
message = 'Hello!';
message = 'World!'; // значение изменено
alert(message);
```
При изменении значения старые данные удаляются из переменной
Мы также можем объявить две переменные и скопировать данные из одной в другую.
```
let hello = 'Hello world!';
let message;
// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;
// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message); // Hello world!
```

### Имена переменных
В JavaScript есть два ограничения, касающиеся имён переменных:

  1. Имя переменной должно содержать только буквы, цифры или символы $ и _.
  2. Первый символ не должен быть цифрой.
```
let userName;
let test123;
```
Примеры неправильных имён переменных:
```
let 1a; // не может начинаться с цифры
let my-name; // дефис '-' не разрешён в имени
```
### Константы
Чтобы объявить константную, то есть, неизменяемую переменную, используйте **const** вместо **let**:
`const myBirthday = '18.04.1982';`
Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить. Попытка сделать это приведёт к ошибке

### Константы в верхнем регистре
Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.
Названия таких констант пишутся с использованием заглавных букв и подчёркивания.
Например, сделаем константы для различных цветов в «шестнадцатеричном формате»:
```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
### Придумывайте правильные имена
Название переменной должно иметь ясный и понятный смысл, говорить о том, какие данные в ней хранятся.
Несколько хороших правил:

  * Используйте легко читаемые имена, такие как *userName* или *shoppingCart*.
  * Избегайте использования аббревиатур или коротких имён, таких как *a, b, c,* за исключением тех случаев, когда вы точно знаете, что так нужно.
  * Делайте имена максимально описательными и лаконичными. Примеры плохих имён: *data* и *value*. Такие имена ничего не говорят. Их можно использовать только в том случае, если из контекста кода очевидно, какие данные хранит переменная.
  * Договоритесь с вашей командой об используемых терминах. Если посетитель сайта называется *«user»*, тогда мы должны называть связанные с ним переменные *currentUser* или *newUser*, а не, к примеру, *currentVisitor* или *newManInTown*.

## Типы данных
Есть восемь основных типов данных в JavaScript. Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:
```
// Не будет ошибкой
let message = "hello";
message = 123456;
```

### Число
Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.
Существует множество операций для чисел.
Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.
  * Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
  `alert( 1 / 0 ); // Infinity`
  `alert( Infinity ); // Infinity`
  * NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:
  `alert( "не число" / 2 ); // NaN, такое деление является ошибкой`
  Если где-то в математическом выражении есть NaN, то оно распространяется на весь результат (есть только одно исключение: NaN ** 0 равно 1).

### BigInt
В JavaScript тип number не может безопасно работать с числами, большими, чем (253-1) (т. е. 9007199254740991) или меньшими, чем -(253-1) для отрицательных чисел.
Если говорить совсем точно, то, технически, тип number может хранить большие целые числа (до 1.7976931348623157 * 10308), но за пределами безопасного диапазона целых чисел ±(253-1) будет ошибка точности
Тип ***BigInt*** был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.
Чтобы создать значение типа ***BigInt***, необходимо добавить *n* в конец числового литерала:
```
/ символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

### Строка
**Строка (string)** в JavaScript должна быть заключена в кавычки.
```
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
```
Обратные кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:
```
let name = "Иван";
// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!
// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
```
Выражение внутри ${…} вычисляется, и его результат становится частью строки.
### Булевый (логический) тип
Булевый тип (boolean) может принимать только два значения: **true** (истина) и **false** (ложь).
```
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
```
Булевые значения также могут быть результатом сравнений:
```
let isGreater = 4 > 1;
alert( isGreater ); // true (результатом сравнения будет "да")
```

### Значение «null»
Специальное значение **null** не относится ни к одному из типов, описанных выше.
Оно формирует отдельный тип, который содержит только значение **null**:
`let age = null;`
Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
В приведённом выше коде указано, что значение переменной age <u>неизвестно</u>.

### Значение «undefined»
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:
```
let age;
alert(age); // выведет "undefined"
```
Технически мы можем присвоить значение undefined любой переменной. Но так делать не рекомендуется. Обычно **null** используется для присвоения переменной «пустого» или «неизвестного» значения, а **undefined** – для проверок, была ли переменная назначена.

### Объекты и символы
Тип **object** (объект) – особенный.
Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.

### Оператор typeof
Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.
У него есть две синтаксические формы:
```
// Обычный синтаксис
typeof 5 // Выведет "number"
// Синтаксис, напоминающий вызов функции (встречается реже)
typeof(5) // Также выведет "number"
```
Если передается выражение, то нужно заключать его в скобки, т.к. typeof имеет более высокий приоритет, чем бинарные операторы:
```
typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof (50 + " Квартир"); // Выведет "string"
```
Другими словами, скобки необходимы для определения типа значения, которое получилось в результате выполнения выражения в них.
Вызов **typeof x** возвращает строку с именем типа:
```
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```
1. **Math** — это встроенный объект, который предоставляет математические операции и константы. 
2. Результатом вызова **typeof null** является *"object"*. Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости. Конечно, null не является объектом. Это специальное значение с отдельным типом.
3. Вызов **typeof alert** возвращает *"function"*, потому что alert является функцией. Функции относятся к объектному типу. Но typeof обрабатывает их особым образом, возвращая "function". Так тоже повелось от создания JavaScript. Формально это неверно, но может быть удобным на практике.

## Взаимодействие: alert, prompt, confirm
### alert
`alert("Hello");`
Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK».

### prompt
Функция prompt принимает два аргумента:
`result = prompt(title, [default]);`
Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

**title**
    Текст для отображения в окне.
**default**
    Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне. 

Пользователь может напечатать что-либо в поле ввода и нажать OK. Введённый текст будет присвоен переменной **result**. Пользователь также может отменить ввод нажатием на кнопку «Отмена» или нажав на клавишу ***Esc***. В этом случае значением **result** станет **null**.
Вызов **prompt** возвращает текст, указанный в поле для ввода, или *null*, если ввод отменён пользователем.
Например:
```
let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!
```
### confirm
`result = confirm(question);`
Функция **confirm** отображает модальное окно с текстом вопроса **question** и двумя кнопками: *OK* и *Отмена*.
Результат – true, если нажата кнопка OK. В других случаях – false.

Например:
```
let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK
```