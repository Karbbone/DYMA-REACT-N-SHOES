import { FlatList, StyleSheet } from "react-native";
import { spaces } from "../../../../constants/spaces";
import { shoes } from "../../../../data/shoes";
import { ItemSeparator } from "../../../../ui-components/separators/ListItemSeparator";
import { VerticalCard } from "./VerticalCard";
export const ShoesLists = () => {
  const data = shoes[0].stock.filter((elem) => !elem.new);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <VerticalCard item={item} />}
      horizontal
      ItemSeparatorComponent={<ItemSeparator width={spaces.L} />}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: spaces.L,
  },
});
