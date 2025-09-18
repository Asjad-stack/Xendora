import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import ResponsiveText from "../../../../components/ResponsiveText"
import { colors, fontSize } from '../../../../constants'
import Spacer from '../../../../components/Spacer';
import { Images } from '../../../../Images';
import { hp, wp } from "../../../../components/ResponsiveComponent"
import { copyPaste } from "../../../../utilities/helperFunction/index"

export const SeedPhraseCard = ({ showSeed, setShowSeed, mnemonic }) => {

    return (
        <>
            {showSeed ?
                <>
                    <View style={[styles.mnemonicBoard, styles.bgView]}>
                        {mnemonic?.map((item, index) => {
                            console.log(mnemonic, 'mnemonicmnemonicmnemonicmnemonic');
                            return (
                                <View key={'mnemonic_' + index}
                                    style={styles.mnemonicItem}>
                                    <ResponsiveText
                                        style={{
                                            color: colors.white,
                                            paddingHorizontal: 10,
                                            textAlign: 'center',
                                        }}>
                                        {(index + 1).toString() + '. ' + item}
                                    </ResponsiveText>
                                </View>
                            );
                        })}

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => copyPaste.copy(mnemonic.join(" "))}
                            style={{ flexDirection: 'row', marginTop: hp(2) }}>
                            <Image source={Images.copy} resizeMode='contain' style={{ width: wp(5), height: wp(5) }} />
                            <ResponsiveText style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: colors.white,
                                marginLeft: wp(2)
                            }}>Copy</ResponsiveText>
                        </TouchableOpacity>
                    </View>

                </>
                :
                <View
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image source={Images.blurImage} resizeMode='contain' style={styles.blurImage} />
                    <View style={{ position: 'absolute' }}>
                        <View>
                            <ResponsiveText
                                style={{
                                    color: colors.white,
                                    ...fontSize.para_semibold,
                                    textAlign: 'center',
                                }}>
                                {'Tap to reveal your seed phrase'}
                            </ResponsiveText>
                        </View>
                        <Spacer customHeight={hp(1)} />
                        <View style={{}}>
                            <ResponsiveText
                                style={{
                                    color: colors.gray1,
                                    ...fontSize.para_regular,
                                    textAlign: 'center',
                                }}>
                                {'Make sure no one is watching your screen.'}
                            </ResponsiveText>
                        </View>
                        <Spacer />
                        <TouchableOpacity activeOpacity={0.8} style={{}} onPress={() => setShowSeed(true)}>
                            <Image source={Images.visableEyeYellow} resizeMode='contain' style={styles.eyeVisible} />
                        </TouchableOpacity>
                    </View>

                </View>
            }
        </>

    )
}


const styles = StyleSheet.create({
    blurImage: {
        width: wp(92),
    },
    eyeVisible: {
        width: wp(30.75),
        height: wp(12),
        alignSelf: 'center',
    },
    btnView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 8,
        height: wp(12),
    },
    mnemonicBoard: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mnemonicItem: {
        backgroundColor: colors.gray1,
        borderRadius: 10,
        height: hp(4),
        width: '45%',
        marginHorizontal: 5,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    bgView: {
        width: wp(92),
        position: 'absolute',
        borderWidth: 1,
        paddingHorizontal: wp(2),
        paddingVertical: wp(4),
        borderRadius: 8,
        borderColor: 'transparent'
    },
})