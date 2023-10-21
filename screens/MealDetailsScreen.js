import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../store/redux/favorites";


function MealDetailsScreen({ route, navigation }) {

    // const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMealIds = useSelector((state)=> state.favoritesMeals.ids);

    const dispatch  = useDispatch();

   



    const mealId = route.params.mealId;

    const selectedMeals = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoritesStatusHandler() {
        if(mealIsFavorite){
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id:mealId}))
        }else{
            dispatch(addFavorite({id:mealId}))
            // favoriteMealsCtx.addFavorite(mealId);
        }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPress={changeFavoritesStatusHandler}
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color={'white'} />
            }
        })
    }, [navigation, changeFavoritesStatusHandler])


    return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
        <Text style={styles.title}>{selectedMeals.title}</Text>
        <MealDetails
            duration={selectedMeals.duration}
            complexity={selectedMeals.complexity}
            affordability={selectedMeals.affordability} textStyle={styles.detailText} />

        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeals.ingredients} />
                <SubTitle>Steps</SubTitle>

                <List data={selectedMeals.steps} />
            </View>
        </View>
    </ScrollView>
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30
    },
    image: {
        width: "100%",
        height: 350,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }


});