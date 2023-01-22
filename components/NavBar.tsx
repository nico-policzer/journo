
import React from 'react';
import type { PropsWithChildren } from 'react';
import { processColor, TextInput, TouchableOpacity } from 'react-native';
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
    return(
        <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('../images/journalIcon.png')}

            />

          </TouchableOpacity>
        </View>


        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('../images/boy.png')}
            style={styles.BoyIconStyle}
          />

        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('../images/historyIcon.png')}

            />

          </TouchableOpacity>

        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    BoyIconStyle: {
        width: 125,
        height: 125,
      },
    
      iconContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      footer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "#121212",
        justifyContent: "space-evenly",
        alignContent: "center",
      },
}

)
export default NavBar;