import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F3F4",
  },
});

export default App;
