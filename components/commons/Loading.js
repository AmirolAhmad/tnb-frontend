import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = ({ size }) => {
  return (
    <View style={styles.horizontal}>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = {
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
};

export default Loading;