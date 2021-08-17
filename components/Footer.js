import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Catalogues from "../screens/Catalogues";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import ProductPage from "./ProductPage";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const CatalogueStackScreen = createNativeStackNavigator();

const CatalogueStack = () => {
  return (
    <CatalogueStackScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CatalogueStackScreen.Screen name="catalogues" component={Catalogues} />
      <CatalogueStackScreen.Screen name="product" component={ProductPage} />
    </CatalogueStackScreen.Navigator>
  );
};
const MyTabs = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <Tab.Navigator
      initialRouteName="catalogue"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        headerShown="false"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-list"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="catalogue"
        component={CatalogueStack}
        options={{
          tabBarLabel: "Catalogue",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-type"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          tabBarLabel: "Favorite",
          tabBarBadge: favorites.length,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default MyTabs;
