import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
import { textSize } from "../../constants/textSize";

export const TextBoldM = ({ children, isBlue = false, style }) => {
  return (
    <Text
      style={[
        styles.text,
        { color: isBlue ? colors.BLUE : colors.DARK },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "SemiBold",
    fontSize: textSize.M,
  },
});
