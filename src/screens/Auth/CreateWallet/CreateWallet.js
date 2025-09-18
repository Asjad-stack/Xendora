import React from 'react'
import { View } from 'react-native'
import { MainContainer } from "../../../components/MainContainer";
import { styles } from './styles';
import ResponsiveText from '../../../components/ResponsiveText';
import Spacer from '../../../components/Spacer';
import { CustomTextInput } from "../../../components/CustomTextInput"
import { hp } from '../../../components/ResponsiveComponent';
import { RoundButton } from '../../../components/RoundButton';
import useCreateWallet from "./Hooks/index"
import { Images } from '../../../Images';
import { Routes } from '../../../constants';

const CreateWallet = (props) => {
    const { newPassword, setNewPassword, confirmPassword, setConfirmPassword } = useCreateWallet()
    return (
        <MainContainer>
            <View style={styles.mainView}>
                <Spacer customHeight={hp(8)} />
                <ResponsiveText style={styles.createPassword}>Create Password</ResponsiveText>
                <Spacer />
                <CustomTextInput placeholder={'New Password'} value={newPassword} onChangeText={(e) => setNewPassword(e)} rightImage={Images.eye} />
                <Spacer />
                <ResponsiveText style={styles.createPassword}>Confirm Password</ResponsiveText>
                <Spacer />
                <CustomTextInput placeholder={'Confirm Password'} value={confirmPassword} onChangeText={(e) => setConfirmPassword(e)} rightImage={Images.eye} />
            </View>
            <View style={styles.btnView}>
                <RoundButton btnTitle={'Confirm'} onPressBtn={() => props?.navigation.navigate(Routes.seedPhrase)} />
            </View>
        </MainContainer>
    )
}

export default CreateWallet
