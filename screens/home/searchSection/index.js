import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SearchInput } from "../../../ui-components/inputs/SearchInput";
import { BrandsList } from "./components/BrandsList";

export const SearchSection = () => {
  const [value, setValue] = useState("");
  return (
    <View style={style.container}>
      <SearchInput
        placeholder="trouver vos shoes"
        value={value}
        onChangeText={setValue}
      />
      <BrandsList />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 120,
    justifyContent: "space-evenly",
  },
});
