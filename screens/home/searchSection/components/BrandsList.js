import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { spaces } from "../../../../constants/spaces";
import { brands } from "../../../../data/brands";
import { ItemSeparator } from "../../../../ui-components/separators/ListItemSeparator";
import { BrandItem } from "./BrandItem";

export const BrandsList = () => {
  const [selectedBrand, setSelectedBrand] = useState("nike");
  return (
    <FlatList
      horizontal
      data={brands}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <BrandItem
          item={item}
          index={index}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      )}
      style={styles.listContainer}
      contentContainerStyle={styles.contentStyle}
      ItemSeparatorComponent={<ItemSeparator width={spaces.S} />}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 0,
  },
  contentStyle: {
    justifyContent: "space-between",
  },
});
