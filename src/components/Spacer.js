import React from 'react'
import { View } from 'react-native'
import { height, width } from 'react-native-dimension';

export const Spacer = ({ customHeight }) => {
    return (
        <View style={{ height: customHeight ? customHeight : height(2) }}>

        </View>
    )
}
export const HorizontalSpacer = ({ customWidth }) => {
    return (
        <View style={{ marginRight: customWidth ? customWidth : width(2) }} />
    )
}

export default Spacer