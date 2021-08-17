import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const CatalogueHeader = () => {
  //Get todoList from todoReducer
  const filterType = useSelector((state) => state.filter.type);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  const [catalogues, setCatalogues] = useState([]);

  const getCatalogues = async () => {
    try {
      const result = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      await result.data.unshift("All");
      setCatalogues(result.data);
      // console.log(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(filterType);
    getCatalogues();
  }, []);
  const setFilterColour = (type) => {
    dispatch({ type: "CHANGE_FILTER", payload: type });
  };
  return (
    <View style={styles.filter}>
      <SafeAreaView>
        <ScrollView horizontal={true}>
          {catalogues?.map((type) => {
            return (
              <TouchableOpacity
                onPress={() => setFilterColour(type)}
                key={type}
                style={{
                  margin: 5,
                  backgroundColor: filterType === type ? "yellow" : "white",
                  borderRadius: 50,
                  padding: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Text>{type}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    padding: 10,
  },
});

export default CatalogueHeader;
