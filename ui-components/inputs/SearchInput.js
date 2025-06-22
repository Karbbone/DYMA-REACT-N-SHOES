import EvilIcons from "@expo/vector-icons/EvilIcons";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";
import { radius } from "../../constants/radius";
import { ICON_SIZE } from "../../constants/sizes";
import { spaces } from "../../constants/spaces";
import { textSize } from "../../constants/textSize";

export const SearchInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <EvilIcons name="search" size={ICON_SIZE} color={colors.GREY} />
      </View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.WHITE,
    marginHorizontal: spaces.L,
    borderRadius: radius.FULL,
    height: 50,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spaces.M,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingRight: spaces.S,
    color: colors.GREY,
    fontFamily: "Regular",
    fontSize: textSize.M,
  },
});
