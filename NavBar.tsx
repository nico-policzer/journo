

import React from 'react';
import type { PropsWithChildren } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
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

function NavBar() {
 return (
    <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.5}
          onPress={buttonDown}>
            <Image
              source={require('./images/journalIcon.png')}

            />

          </TouchableOpacity>
        </View>


        <TouchableOpacity activeOpacity={0.5}
        onPress={buttonDown}>
          <Image
            source={require('./images/boy.png')}
            style={styles.BoyIconStyle}
          />

        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.5}
          onPress={buttonDown}>
            <Image
              source={require('./images/historyIcon.png')}

            />

          </TouchableOpacity>

        </View>
        </View>
 );
};

function buttonDown() {
    console.log("Button down!");
}

const styles = StyleSheet.create({
    footer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "#121212",
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

export default NavBar;