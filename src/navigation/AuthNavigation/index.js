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
        </Navigator>
    );
};

export default AuthNavigation;