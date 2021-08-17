import React, { useEffect } from "react";
import { Text, View, ImageBackground, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ProductPage from "./ProductPage";
const Product = (props) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const navigation = useNavigation();

  const removeFromFav = async (product) => {
    console.log("remove");
    const newFav = await favorites.filter(
      (favorite) => favorite.id !== product.id
    );
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: newFav });
  };

  const addToFav = async (product) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: product });
    console.log(favorites.includes(product));
  };

  //Use for all the dispatch actions
  const dispatch = useDispatch();
  useEffect(() => {}, [favorites]);
  return (
    <TouchableHighlight
      underlayColor={"transparent"}
      onPress={
        () => navigation.navigate("product", { product: props.product })
        // console.log("asdasd")
      }
    >
      <View>
        <ImageBackground
          source={{
            uri: props.product.image,
          }}
          style={{
            width: 163,
            height: 163,
            margin: 20,
            borderRadius: 25,
            marginBottom: -1,
          }}
        >
          <View style={{ position: "absolute", bottom: -30, right: 0 }}>
            {favorites.includes(props.product) === true ? (
              <Icon
                raised
                size={19}
                name="heart"
                type="font-awesome"
                color="#f50"
                onPress={() => removeFromFav(props.product)}
              />
            ) : (
              <Icon
                raised
                size={19}
                name="heart-o"
                type="font-awesome"
                color="#f50"
                onPress={() => addToFav(props.product)}
              />
            )}
          </View>
        </ImageBackground>

        <Text
          ellipsizeMode="clip"
          style={{
            width: 163,
            margin: 25,
            marginBottom: -1,
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 19,
            color: "#34283E",
          }}
          numberOfLines={1}
        >
          {props.product.title}{" "}
        </Text>
        <Text
          style={{
            width: 163,
            marginHorizontal: 25,
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 19,
            color: "#34283E",
          }}
          numberOfLines={1}
        >
          {props.product.description}
        </Text>
        <Text
          style={{
            width: 163,
            marginHorizontal: 25,
            fontWeight: "700",
            marginTop: 10,
            fontSize: 17,
            lineHeight: 19,
            color: "#34283E",
          }}
        >
          ${props.product.price}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Product;
