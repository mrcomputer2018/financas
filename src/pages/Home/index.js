import React from "react";
import { View, Text } from "react-native";

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });