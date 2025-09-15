import { StyleSheet, Text } from 'react-native'
import { colors, fontFamily } from '../constants'

const ResponsiveText = ({ children, style, onPress, numberOfLines }) => {
    return (
        <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles?.textStyle, style]}>{children}</Text>
    )
}

export default ResponsiveText

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontFamily: fontFamily?.appTextMedium,
        color: colors.white
    }
})