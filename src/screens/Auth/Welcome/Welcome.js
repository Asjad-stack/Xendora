import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, View, Image } from 'react-native';
import { MainContainer } from '../../../components/MainContainer';
import ResponsiveText from '../../../components/ResponsiveText'
import { colors, Routes } from '../../../constants';
import { Images } from '../../../Images/index'
import { wp, hp } from '../../../components/ResponsiveComponent'

const Welcome = (props) => {
    return (
        <MainContainer style={styles.mainContainer}>
            <StatusBar barStyle={'light-content'} translucent />
            <View style={{ flex: 1 }}>
                <Image source={Images.bitCoinWelcomeLogo} resizeMode='contain' style={styles.bitCoinWelcomeLogo} />
                <ResponsiveText style={styles.welcomeText}>Welcome to Your Web3 Wallet</ResponsiveText>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.getStartedButton} onPress={() => props?.navigation.navigate(Routes.oBoarding)}>
                <ResponsiveText style={styles.walletOptionsText}>Get Started</ResponsiveText>
            </TouchableOpacity>
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
        alignSelf: 'center'
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center',
    },
    getStartedButton: {
        width: wp(88),
        padding: wp(4),
        borderRadius: 30,
        marginBottom: hp(3),
        backgroundColor: colors.orange,
        alignItems: 'center'
    },
    walletOptionsText: {
        color: colors.white,
        fontSize: 14,
    },
});
