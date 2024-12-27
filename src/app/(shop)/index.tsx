import { StyleSheet, Text, View, FlatList } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../components/ProductListItem";
import ListHeader from "../../components/list-header";

export default function Home() {
  return (
    <View>
     <FlatList
     data={PRODUCTS}
     keyExtractor={item=>item.id.toString()}
     renderItem={({item})=><ProductListItem product={item}/>}
     numColumns={2}
     ListHeaderComponent={ListHeader}
     contentContainerStyle={styles.flatListContent}
     columnWrapperStyle={styles.flatListColumn}
     style={{paddingHorizontal:10, paddingVertical: 5}}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
});
