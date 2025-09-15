import AuthNavigation from "./AuthNavigation"
import AppNavigation from "./AppNavigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../constants/routes";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false, navigationBarColor: "#100D26" }}
                initialRouteName={Routes.authStack}>
                <Screen name={Routes.authStack} component={AuthNavigation} />
                {/* <Screen name={Routes.appStack} component={AppNavigation} /> */}
            </Navigator>
        </NavigationContainer>


    )
}

export default Navigation

