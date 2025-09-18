import { StyleSheet } from 'react-native'
import { hp, wp } from "../../../components/ResponsiveComponent"
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    centreView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    number: {
        fontSize: 56,
        fontWeight: '400',
        color: colors.green,
        textAlign: 'center'
    },
    seedPhraseOuterView: {
        borderWidth: 1,
        borderColor: colors.gray1,
        backgroundColor: 'transparent',
        borderRadius: 8,
        padding: wp(3),
        height: wp(36)
    },
    line: {
        width: wp(14.41),
        height: 2,
        borderRadius: 2,
        backgroundColor: colors.green,
    },
    lineinactive: {
        width: wp(14.41),
        height: 2,
        borderRadius: 2,
        backgroundColor: colors.gray1,
    },
    btnView: {
        paddingHorizontal: wp(5),
        paddingBottom: hp(3),
    },
})