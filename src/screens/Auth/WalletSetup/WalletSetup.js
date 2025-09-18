import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MainContainer } from "../../../components/MainContainer";
import { Images } from '../../../Images';
import { hp, wp } from '../../../components/ResponsiveComponent';
import { RoundButton } from '../../../components/RoundButton'
import { colors, Routes } from '../../../constants';
import Spacer from '../../../components/Spacer';

const WalletSetup = (props) => {
    return (
        <MainContainer>
            <View style={styles.mainView}>
                <Image source={Images.xendora} resizeMode='contain' style={styles.walletSetup} />
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <RoundButton btnTitle={'Create a new wallet'} btnStyles={styles.btnStyles} onPressBtn={() => props?.navigation.navigate(Routes.createWallet)} />
                <Spacer customHeight={hp(1.5)} />
                <RoundButton btnTitle={'Import using seed phrase'} btnStyles={styles.btnStyles1} titleStyles={styles.btnTitle} onPressBtn={() => props?.navigation.navigate(Routes.importWallet)} />
            </View>
        </MainContainer>
    )
}

export default WalletSetup

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4),
        justifyContent: 'center'
    },
    walletSetup: {
        width: wp(80),
        height: hp(80),
    },
    btnTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.white,
        textAlign: 'center'
    },
    btnStyles: {
        width: wp(92),
        height: hp(6),
        backgroundColor: colors.white,
    },
    btnStyles1: {
        width: wp(92),
        height: hp(6),
        backgroundColor: colors.black,
    },
})