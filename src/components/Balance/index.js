import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({ balance, expense }) {
    return(
        <View style={ styles.container }>
            {/* saldo */}
            <View style={ styles.item }>
                <Text style={ styles.itemTitle }>Saldo</Text>
                <View style={ styles.content }>
                    <Text style={ styles.currencySymbol }>R$</Text>
                    <Text style={ styles.balance }>{ balance }</Text>
                </View>
            </View>

            {/* /gastos  */}
            <View style={ styles.item }>
                <Text style={ styles.itemTitle }>Gastos</Text>
                <View style={ styles.content } >
                    <Text style={ styles.currencySymbol }>R$</Text>
                    <Text style={ styles.expense }>{ expense }</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,
        marginTop: -24,
        marginStart:14,
        marginEnd: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        /* ficar no topo de tudo */
        zIndex: 99,
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#dadada',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71',
    },
    expense: {
        fontSize: 22,
        color: '#e74c3c',
    },
  });