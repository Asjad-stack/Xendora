import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { MainContainer } from '../../../components/MainContainer';
import ResponsiveText from '../../../components/ResponsiveText'
import { colors, Routes } from '../../../constants';
import { Images } from '../../../Images/index'
import { wp, hp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer';

const Welcome = (props) => {
    return (
        <MainContainer>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={Images.bitCoinWelcomeLogo} resizeMode='contain' style={styles.bitCoinWelcomeLogo} />
            </View>
            <>
                <ResponsiveText style={styles.welcomeText}>Welcome to Your Web3 Wallet</ResponsiveText>
                <Spacer customHeight={hp(1)} />
                <TouchableOpacity activeOpacity={0.8} style={styles.getStartedButton} onPress={() => props?.navigation.navigate(Routes.oBoarding)}>
                    <ResponsiveText style={styles.walletOptionsText}>Get Started</ResponsiveText>
                </TouchableOpacity>
            </>
        </MainContainer>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grayBg

    },
    bitCoinWelcomeLogo: {
        width: wp(50),
        // height: hp(50),
        alignSelf: 'center'
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center',
    },
    getStartedButton: {
        width: wp(86),
        padding: wp(4),
        borderRadius: 15,
        marginBottom: hp(3),
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    walletOptionsText: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.black,
    },
});
