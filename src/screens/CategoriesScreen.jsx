import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({ navigation }) => {
    return (
        <View>
            <Text>CategoriesScreen</Text>
            <Button title='Navegar a Bread' onPress={() => navigation.navigate("Bread")} />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})

