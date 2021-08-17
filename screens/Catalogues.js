import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useState, useEffect } from "react";
import Product from "../components/ProductCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CatalogueHeader from "../components/CatalogueHeader";
import Header from "../components/Header";

const Catalogues = () => {
  const [products, setProducts] = useState([]);
  const filterType = useSelector((state) => state.filter.type);

  const getProducts = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <CatalogueHeader />
      <Text
        style={{
          width: 163,
          marginLeft: 23,
          fontWeight: "600",
          fontSize: 19,
          color: "#34283E",
          lineHeight: 23,
        }}
      >
        {
          products?.filter((product) => {
            if (filterType === "All") {
              return product;
            } else {
              return filterType === product.category;
            }
          }).length
        }{" "}
        item
      </Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true}>
        <View
          style={{
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {products?.map((product) => {
            if (filterType === "All") {
              return <Product key={product.id} product={product} />;
            } else if (product.category === filterType) {
              return <Product key={product.id} product={product} />;
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Catalogues;
