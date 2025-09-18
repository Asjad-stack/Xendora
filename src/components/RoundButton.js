
import React from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import ResponsiveText from "../components/ResponsiveText"
import { hp, wp } from './ResponsiveComponent';
import { colors } from '../constants';

export const RoundButton = ({ loading, loaderSize, loadingColor, btnTitle, disabled, onPressBtn, btnStyles, titleStyles }) => {
    return (

        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.primaryBtn, btnStyles]}
            disabled={disabled}
            onPress={onPressBtn}>
            {loading ? (
                <ActivityIndicator
                    size={loaderSize ? loaderSize : 'large'}
                    color={loadingColor ? loadingColor : colors.black}
                />
            ) : (
                <View>
                    <ResponsiveText style={[styles.primaryBtnText, titleStyles]}>{btnTitle}</ResponsiveText>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
        width: wp(86),
        height: hp(6),
        backgroundColor: colors.white,
        borderRadius: 15,
        alignItems: "center",
        paddingVertical: 16,
        alignSelf: 'center'
    },
    primaryBtnText: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.black,
        textAlign: 'center'
    }
})