import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TextBoldS } from "./ui-components/textes/TextBoldS";
import { TextBoldXL } from "./ui-components/textes/TextBoldXL";
import { TextMediumM } from "./ui-components/textes/TextMediumM";
import { TextRegularM } from "./ui-components/textes/TextRegularM";

export default function App() {
  const [fontsLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  return fontsLoaded ? (
    <View style={styles.container}>
      <TextBoldS isBlue>Open up App.js to start working on your app!</TextBoldS>
      <TextBoldXL isBlue>
        Open up App.js to start working on your app!
      </TextBoldXL>
      <TextRegularM isBlue>
        Open up App.js to start working on your app!
      </TextRegularM>
      <TextMediumM isBlue>
        Open up App.js to start working on your app!
      </TextMediumM>
      <StatusBar style="auto" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
