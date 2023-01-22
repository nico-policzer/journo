/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container} >

<View >
  <View style={styles.iconContainer}>
    <TouchableOpacity activeOpacity={0.5}>
      <Image
        source={require('./images/journalIcon.png')}
        
      />

    </TouchableOpacity>
  </View>


  <TouchableOpacity activeOpacity={0.5}>
    <Image
      source={require('./images/boy.png')}
      style={styles.BoyIconStyle}
    />

  </TouchableOpacity>
  <View style={styles.iconContainer}>
    <TouchableOpacity activeOpacity={0.5}>
      <Image
        source={require('./images/historyIcon.png')}
        
      />

    </TouchableOpacity>

  </View>
</View>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: "black",
     //'#4c2150',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    display: "flex",
    backgroundColor: "black",
    flexDirection: "row",
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  BoyIconStyle: {
    width: 125,
    height: 125,
  },

  iconContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default App;
