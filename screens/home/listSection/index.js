import { StyleSheet, View } from "react-native";
import { spaces } from "../../../constants/spaces";
import { Banner } from "../components/Banner";
import { ShoesLists } from "./components/ShoesLists";

export const ListSection = () => {
  return (
    <View style={style.container}>
      <Banner text={"Shoes populaires"} />
      <ShoesLists />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 240,
    paddingVertical: spaces.L,
  },
});
