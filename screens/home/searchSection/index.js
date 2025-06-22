import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { spaces } from "../../../constants/spaces";
import { SearchInput } from "../../../ui-components/inputs/SearchInput";

export const SearchSection = () => {
  const [value, setValue] = useState("");
  return (
    <View style={style.container}>
      <SearchInput
        placeholder="trouver vos shoes"
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 120,
    paddingTop: spaces.S,
  },
});
