import React from 'react'
import { Text, View } from 'react-native'
import { MainContainer } from "../../../components/MainContainer";
import { styles } from './styles';
import ResponsiveText from '../../../components/ResponsiveText';
import Spacer from '../../../components/Spacer';
import { RoundButton } from '../../../components/RoundButton';

const SuccessScreen = () => {
    return (
        <MainContainer>
            <View style={styles.mainView}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ResponsiveText style={styles.successText}>Success!</ResponsiveText>
                    <Spacer />
                    <ResponsiveText style={styles.successDesc}>You've successfully protected your wallet. Remember to keep your seed phrase safe, it's your responsibility!</ResponsiveText>
                    <Spacer />
                    <ResponsiveText style={styles.successDesc}>Xendora Technologies cannot recover your wallet should you lose it. You can find your seed phrase in Settings Security & Privacy</ResponsiveText>
                </View>
            </View>
            <View style={styles.btnView}>
                <RoundButton btnTitle={'Confirm'} onPressBtn={() => { }} />
            </View>
        </MainContainer>
    )
}

export default SuccessScreen

