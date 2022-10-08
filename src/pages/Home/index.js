import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../../components/Header";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Marcus Silva"/>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });