import { Text, View } from 'react-native'
import { MainContainer } from '../../../components/MainContainer';
import { styles } from './styles';
import ResponsiveText from "../../../components/ResponsiveComponent"

const ImportWallet = () => {
    return (
        <MainContainer>
            <View style={styles.mainView}>
                <ResponsiveText>ImportWallet</ResponsiveText>
            </View>
        </MainContainer>
    )
}

export default ImportWallet

