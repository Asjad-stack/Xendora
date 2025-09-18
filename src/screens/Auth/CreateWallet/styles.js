import { StyleSheet } from 'react-native'
import { hp, wp } from "../../../components/ResponsiveComponent"

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(5)
    },
    btnView: {
        paddingHorizontal: wp(5),
        paddingBottom: hp(3)
    }
})