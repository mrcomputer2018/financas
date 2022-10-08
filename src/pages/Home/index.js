import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Marcus Silva"/>
            <Balance balance="9.500,30" expense="390,00"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
  });