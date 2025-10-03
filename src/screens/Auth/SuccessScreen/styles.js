import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent';
import { colors } from '../../../constants';



export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    successText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "800",
        textAlign: "center",
    },
    successDesc: {
        fontSize: 30,
        color: colors.gray1,
        textAlign: "center",
    },
    btnView: {
        paddingHorizontal: wp(5),
        paddingBottom: hp(3)
    }
})