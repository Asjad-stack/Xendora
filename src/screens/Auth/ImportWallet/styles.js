import { StyleSheet } from 'react-native'
import { hp, wp } from "../../../components/ResponsiveComponent"
import { colors } from '../../../constants';

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    heroWrap: {
        alignItems: "center",
    },
    logoCircle: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: colors.sub,
        alignItems: "center",
        justifyContent: "center",
    },
    logoMark: {
        fontSize: 48,
        fontWeight: "800",
        color: colors.black,
    },
    title: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "800",
    },
    subtitle: {
        color: colors.sub,
        textAlign: "center",
    },
    toggleRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        gap: 10,
        paddingHorizontal: wp(6),
    },
    pill: {
        borderRadius: 100,
        paddingHorizontal: wp(4),
        paddingVertical: hp(0.8),
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.outline,
        margin: wp(1)
    },
    pillText: {
        color: colors.white,
        fontWeight: "700",
        fontSize: 13,
    },
    pasteBtn: {
        backgroundColor: colors.pasteBtnColor,
        paddingHorizontal: wp(4),
        paddingVertical: hp(0.8),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.outline,
    },
    pasteText: { color: colors.white, fontWeight: "700", fontSize: 13 },

    card: {
        marginTop: 14,
        marginHorizontal: 24,
        backgroundColor: colors.card,
        borderRadius: wp(4),
        borderWidth: 1,
        borderColor: colors.outline,
        maxHeight: 360,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    cell: {
        width: "47%",
    },
    index: {
        color: colors.sub,
        marginBottom: 6,
        fontSize: 12,
    },
    input: {
        backgroundColor: "#1E2430",
        color: colors.white,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: colors.outline,
        fontWeight: "700",
        letterSpacing: 0.3,
    },
    hint: { color: colors.sub, fontSize: 12 },

    bottomArea: {
        paddingHorizontal: wp(4),
        paddingBottom: hp(3)
    },
    btn1Styles: {
        width: wp(92),
        backgroundColor: colors.white,
        borderRadius: 100,
        alignItems: "center",
        paddingVertical: 16,
    },
    btn1TitleStyles: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.black
    },
    btn2TitleStyles: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.white
    },
    btn2Styles: {
        height: hp(6),
        borderRadius: 100,
        alignItems: "center",
        backgroundColor: colors.black
    },
    outlineBtnText: { color: colors.white, fontWeight: "700" },
    errorText: { color: colors.error, textAlign: "center" },
    okText: { color: colors.green, textAlign: "center" },
})


