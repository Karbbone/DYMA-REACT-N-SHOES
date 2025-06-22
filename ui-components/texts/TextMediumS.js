import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
import { textSize } from "../../constants/textSize";

export const TextMediumS = ({ children, isBlue = false }) => {
  return (
    <Text style={[styles.text, { color: isBlue ? colors.BLUE : colors.DARK }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Medium",
    fontSize: textSize.S,
  },
});
