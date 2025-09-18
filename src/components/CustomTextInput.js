import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily } from '../constants'
import { Icon } from 'react-native-elements'
import { width, height, totalSize } from 'react-native-dimension'
import Spacer from './Spacer'
import { ResponsiveText } from './ResponsiveText'
import { appStyles } from '../utilities'
import { hp, wp } from './ResponsiveComponent'



export const CustomTextInput = ({ numberOfLines, leftImage, autoCapitalize, secureTextEntry, rightText, dropDown, onPressRightText,
    value, error, onPress, onPressIcon, placeholderTextColor, editable, keyboardType, multiline, placeholder, dollarAmount, coinLogo,
    onChangeText, iconName, iconType, iconColor, iconSize, containerStyle, inputStyle, iconStyle, rightImage, onPressRightImage }) => {

    return (
        <View>

            <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.inputContainer, containerStyle]}>

                <View style={appStyles.rowBasic}>
                    {leftImage ?
                        <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
                        : null}
                    <TextInput
                        value={value}
                        editable={editable ?? !onPress}
                        multiline={multiline}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        cursorColor={colors.appBgColor3}
                        autoCapitalize={autoCapitalize ?? 'none'}
                        numberOfLines={numberOfLines}
                        secureTextEntry={secureTextEntry}
                        style={[styles.input, inputStyle]}
                        placeholderTextColor={placeholderTextColor ?? colors?.gray1

                        }
                    />
                </View>


                {rightText ?
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressRightText} style={appStyles.row}>
                        {coinLogo ?
                            <Image source={coinLogo} resizeMode='contain' style={styles.coinLogo} />
                            : null}
                        <ResponsiveText style={styles.rightText}>{rightText}</ResponsiveText>
                        <Image source={dropDown} resizeMode='contain' style={styles.dropDown} />
                    </TouchableOpacity>
                    : null}

                {rightImage ?
                    <TouchableOpacity activeOpacity={0.5} onPress={onPressRightImage} style={{ alignSelf: 'center' }}>
                        <Image source={rightImage} resizeMode='contain' style={{
                            ...styles.rightImage,
                        }} />
                    </TouchableOpacity>

                    :
                    iconName ?
                        <Icon name={iconName} type={iconType} color={iconColor ?? colors?.white} size={iconSize ?? totalSize(2.2)} style={[styles?.icon, iconStyle]} onPress={onPressIcon} />
                        : null}

            </TouchableOpacity>
            {error &&
                <View >
                    <Spacer customHeight={height(1)} />
                    <ResponsiveText style={[appStyles?.smallText, { color: colors?.error }]}>{error}</ResponsiveText>
                </View>
            }
        </View>
    )
}



const styles = StyleSheet.create({
    leftImage: {
        width: wp(4.5),
        height: wp(4.5),
        marginRight: wp(2),
        paddingHorizontal: wp(3)
    },
    titleText: {
        fontSize: 20,
        fontFamily: fontFamily.appTextSemiBold,
        color: colors.white
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 15,
        paddingHorizontal: wp(3.5),
        height: hp(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: wp(92)
    },
    input: {
        width: wp(65),
        color: colors.white
    },

    otpContainer: {

        width: width(85),
        alignSelf: 'center'
    },
    pinCodeContainer: {
        width: width(14),
        height: width(15),
    },
    pinCodeText: {
        fontSize: totalSize(1.6),
        color: colors?.appColorFaded,
        fontFamily: fontFamily?.appTextMedium
    },
    focusStick: {
        backgroundColor: colors?.appBgColor1,
        height: height(2)
    },
    placeholderText: {
        fontSize: totalSize(1.6)
    },
    rightImage: {
        width: wp(5),
        height: wp(5),
        alignSelf: 'center'
    },
    dollarAmount: {
        fontSize: 10,
        fontFamily: fontFamily?.appTextMedium,
        color: colors.gray3,
    },
    rightText: {
        fontSize: 14,
        fontFamily: fontFamily?.appTextMedium,
        color: colors.gray9,
    },
    dropDown: {
        width: wp(4.5),
        height: wp(4.5),
        alignSelf: 'center',
        marginLeft: wp(3)
    },
    coinLogo: {
        width: wp(7.5),
        height: wp(7.5),
        alignSelf: 'center',
        marginRight: wp(3)
    },

})