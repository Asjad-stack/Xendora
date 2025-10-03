import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants/routes';

import * as Auth from '../../screens/Auth'

const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Routes.welcome} component={Auth.Welcome} />
            <Screen name={Routes.oBoarding} component={Auth.Onboarding} />
            <Screen name={Routes.walletSetup} component={Auth.WalletSetup} />
            <Screen name={Routes.createWallet} component={Auth.CreateWallet} />
            <Screen name={Routes.importWallet} component={Auth.ImportWallet} />
            <Screen name={Routes.seedPhrase} component={Auth.SeedPhrase} />
            <Screen name={Routes.confirmSeedPhrase} component={Auth.ConfirmSeedPhrase} />
            <Screen name={Routes.successScreen} component={Auth.SuccessScreen} />
        </Navigator>
    );
};

export default AuthNavigation;