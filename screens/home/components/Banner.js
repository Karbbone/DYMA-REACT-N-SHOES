import { StyleSheet, TouchableOpacity, View } from "react-native";
import { spaces } from "../../../constants/spaces";
import { TextBoldL } from "../../../ui-components/texts/TextBoldL";
import { TextMediumM } from "../../../ui-components/texts/TextMediumM";

export const Banner = ({ text }) => {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <TextBoldL>{text}</TextBoldL>
      <TouchableOpacity onPress={onPress}>
        <TextMediumM isBlue>Voir tout</TextMediumM>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spaces.L,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spaces.M,
  },
});
