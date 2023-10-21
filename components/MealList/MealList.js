import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";



function MealList({items}) {
    function renderMealItem(itemData) {
        const item = itemData.item;
        return <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            id={item.id}
        />
    }

    return <View style={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    </View>
}
export default MealList;

const styles = StyleSheet.create({
    container :{
        flex: 1,
        padding:16
    }
})