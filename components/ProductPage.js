import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";

const ProductPage = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View>
      <LinearGradient
        style={styles.top}
        colors={["#1c0e26", "#583073", "#6f3596"]}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Icon
          name="arrow-left"
          color="white"
          type="font-awesome"
          size={25}
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      </LinearGradient>
      <Text
        style={{
          fontWeight: "400",
          color: "#34283E",
          fontSize: 19,
          margin: 20,
          lineHeight: 23,
        }}
      >
        {product.title}
      </Text>
      <Text
        style={{
          fontWeight: "700",
          color: "#34283E",
          fontSize: 19,
          margin: 20,
          lineHeight: 31,
        }}
      >
        ${product.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "black",
    paddingTop: 60,
    paddingBottom: 40,
    paddingLeft: 50,

    alignItems: "flex-start",
  },
});
export default ProductPage;
