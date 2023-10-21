import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {

    const favoriteMealsCtx =useContext(FavoritesContext);

    const favoriteMealIds =  useSelector((state)=>state.favoritesMeals.ids);


    const favoriteMeals = MEALS
    // .filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    .filter(meal => favoriteMealIds.includes(meal.id));

    if(favoriteMeals.length === 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have not favorite meals yet.</Text>
        </View>
    }
    return <MealList items={favoriteMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    }
})