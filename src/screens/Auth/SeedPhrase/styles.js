import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    seedPhraseInfo: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center'
    },
    seedPhraseDesc: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.gray1,
        textAlign: 'center'
    },
    btnView: {
        paddingHorizontal: wp(5),
        paddingBottom: hp(3)
    }
})