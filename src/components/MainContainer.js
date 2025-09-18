import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { colors } from "../constants"
import Spacer from "./Spacer"
import { hp } from "./ResponsiveComponent"

export const MainContainer = ({ style, children }) => {
    return (
        <View style={[{
            ...styles.mainContainer,
        }, style]}>
            <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grayBg
    }
})