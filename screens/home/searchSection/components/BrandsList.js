import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { brands } from "../../../../data/brands";
import { BrandItem } from "./BrandItem";
import { ItemHorizontalSeparator } from "./ItemHorizontalSeparator";

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
      ItemSeparatorComponent={ItemHorizontalSeparator}
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
