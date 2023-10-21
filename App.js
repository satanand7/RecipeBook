import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';

import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: {
      backgroundColor: "#3f2f25"
    },
    drawerContentStyle: {
      backgroundColor: '#351401'
    },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#ddb8a3'
  }}>
    <Drawer.Screen name="Category"
      component={CategoryScreen}
      options={{
        title: "All Category",
        drawerIcon: ({ size, color }) => <Ionicons name='list' size={size} color={color} />
      }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      title: 'Favorites',
      drawerIcon: ({ size, color }) => <Ionicons name='star' size={size} color={color} />
    }} />
  </Drawer.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: "#3f2f25"
              }
            }
            }
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}

            />
            <Stack.Screen name='MealDetail'
              component={MealDetailsScreen}
              options={{ title: 'About the Meal' }} />
          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});
