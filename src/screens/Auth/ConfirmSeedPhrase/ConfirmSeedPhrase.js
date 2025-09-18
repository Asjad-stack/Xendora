import React from 'react'
import { View } from 'react-native'
import { MainContainer } from "../../../components/MainContainer"
import ResponsiveText from '../../../components/ResponsiveText'
import useConfirmSeedPhrase from "./Hooks/index"
import { colors } from '../../../constants'
import { styles } from "./styles"
import { RoundButton } from '../../../components/RoundButton'
import Spacer, { HorizontalSpacer } from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities'
import { UniqueSeedPhrase } from "./Components/index"


const ConfirmSeedPhrase = (props) => {
    const {
        randomSeedPhrases,
        isdisabled,
        targetIndex,
        handleNext,
        RandoWordNumber,
        handleSeedPhraseSelection,
        selectedWord,
        Loading
    } = useConfirmSeedPhrase(props)

    return (
        <MainContainer>
            <Spacer customHeight={hp(10)} />
            <View style={styles.mainView}>
                <View style={{ alignItems: 'center' }}>
                    <ResponsiveText style={{ color: colors.white }}>Confirm Seed Phrase</ResponsiveText>
                </View>
                <View style={{ paddingHorizontal: 24, marginTop: 16 }}>
                    <ResponsiveText
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            marginHorizontal: 20,
                            lineHeight: 22
                        }}>
                        Select each word in the order it was presented to yousss
                    </ResponsiveText>
                </View>
                <View style={styles.centreView}>
                    <Spacer />
                    <ResponsiveText style={styles.number}>{RandoWordNumber[targetIndex]?.number}.{selectedWord ?? ''}</ResponsiveText>
                    <Spacer customHeight={hp(5)} />
                    <View style={{ ...appStyles.rowBasic, justifyContent: 'center' }}>
                        {targetIndex >= 0 ? <View style={styles.line} /> :
                            <View style={styles.lineinactive} />
                        }

                        <HorizontalSpacer />
                        {targetIndex >= 1 ? <View style={styles.line} /> :
                            <View style={styles.lineinactive} />
                        }
                        <HorizontalSpacer />
                        {targetIndex == 2 ? <View style={styles.line} /> :
                            <View style={styles.lineinactive} />
                        }
                    </View>
                    <Spacer customHeight={hp(4)} />
                    <View style={styles.seedPhraseOuterView}>
                        <UniqueSeedPhrase data={randomSeedPhrases} onSelect={(item) => handleSeedPhraseSelection(item)} disabled={Loading} />
                    </View>
                </View>

            </View>
            <View style={styles.btnView}>
                <RoundButton
                    btnTitle={'Next'}
                    disabled={isdisabled}
                    loading={Loading}
                    onPressBtn={() => handleNext()}
                    btnStyles={{ backgroundColor: isdisabled ? colors.gray1 : colors.white }}
                />
            </View>
        </MainContainer>
    )
}

export default ConfirmSeedPhrase

