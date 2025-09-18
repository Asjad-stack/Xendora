import React from 'react'
import { View } from 'react-native'
import { MainContainer } from "../../../components/MainContainer"
import { styles } from './styles'
import ResponsiveText from '../../../components/ResponsiveText'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { RoundButton } from '../../../components/RoundButton'
import useSeedPhrase from "./Hooks/index"
import { SeedPhraseCard } from "./Components/index"
import { Routes } from '../../../constants'

const SeedPhrase = (props) => {
    const { showSeed, setShowSeed, mnemonic } = useSeedPhrase(props)
    return (
        <MainContainer>
            <View style={styles.mainView}>
                <Spacer customHeight={hp(10)} />
                <ResponsiveText style={styles.seedPhraseInfo}>Write Down Your Seed Phrase</ResponsiveText>
                <Spacer customHeight={hp(1)} />
                <ResponsiveText style={styles.seedPhraseDesc}>This is your seed phrase. Write it down on a paper and keep it in a safe place. You'll be asked to re-enter this phrase (in order) on the next step.</ResponsiveText>
            </View>
            <Spacer customHeight={hp(3)} />
            <SeedPhraseCard showSeed={showSeed} setShowSeed={setShowSeed} mnemonic={mnemonic} />
            <View style={styles.btnView}>
                <RoundButton btnTitle={'Confirm'} disabled={!showSeed ? true : false} onPressBtn={() => props?.navigation.navigate(Routes.confirmSeedPhrase, { mnemonic: mnemonic.join(" ") })} />
            </View>
        </MainContainer>
    )
}

export default SeedPhrase
