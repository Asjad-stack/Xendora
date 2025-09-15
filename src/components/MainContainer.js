import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"

export const MainContainer = ({ style, children }) => {
    return (
        <View style={[{
            ...styles.mainContainer,
        }, style]}>
            <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 }
})