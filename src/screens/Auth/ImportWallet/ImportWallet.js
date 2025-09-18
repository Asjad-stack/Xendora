import React, { useRef } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { styles } from "./styles"
import { colors } from "../../../constants";
import useImportWallet from "./Hooks/index"
import { MainContainer } from "../../../components/MainContainer";
import Spacer from "../../../components/Spacer";
import { hp, wp } from "../../../components/ResponsiveComponent";
import ResponsiveText from "../../../components/ResponsiveText";
import { RoundButton } from "../../../components/RoundButton";

export default function ImportWallet(props) {

    const { wordsCount, setWordsCount, words, isSubmitting, handlePaste, onImport, handleChange, isValid } = useImportWallet()
    const inputsRef = useRef([]);

    return (
        <MainContainer>
            <View style={styles.mainView}>
                <Spacer customHeight={hp(8)} />
                <View style={styles.heroWrap}>
                    <View style={styles.logoCircle}>
                        <ResponsiveText style={styles.logoMark}>X</ResponsiveText>
                    </View>
                    <Spacer customHeight={hp(1)} />
                    <ResponsiveText style={styles.title}>Import Wallet</ResponsiveText>
                    <Spacer customHeight={hp(1)} />
                    <ResponsiveText style={styles.subtitle}>
                        Enter your {wordsCount}-word seed phrase in order. Keep it private.
                    </ResponsiveText>
                </View>

                <Spacer />
                <View style={styles.toggleRow}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TogglePill
                            label="12 words"
                            active={wordsCount === 12}
                            onPress={() => setWordsCount(12)}
                        />
                        <TogglePill
                            label="24 words"
                            active={wordsCount === 24}
                            onPress={() => setWordsCount(24)}
                        />
                    </View>
                    <TouchableOpacity style={styles.pasteBtn} onPress={() => handlePaste()}>
                        <ResponsiveText style={styles.pasteText}>Paste</ResponsiveText>
                    </TouchableOpacity>
                </View>

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}>
                    <ScrollView
                        style={styles.card}
                        contentContainerStyle={{ padding: wp(4) }}
                        keyboardShouldPersistTaps="handled" >
                        <View style={styles.grid}>
                            {Array.from({ length: wordsCount }).map((_, i) => (
                                <View key={i} style={styles.cell}>
                                    <ResponsiveText style={styles.index}>{i + 1}</ResponsiveText>
                                    <TextInput
                                        ref={r => (inputsRef.current[i] = r)}
                                        value={words[i]}
                                        onChangeText={t => handleChange(i, t)}
                                        placeholder="word"
                                        placeholderTextColor="#5F6772"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        textContentType="none"
                                        style={styles.input}
                                        returnKeyType={i === wordsCount - 1 ? "done" : "next"}
                                        onSubmitEditing={() =>
                                            i < wordsCount - 1
                                                ? inputsRef.current[i + 1]?.focus()
                                                : undefined
                                        }
                                    />
                                </View>
                            ))}
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <ResponsiveText style={styles.hint}>
                                Only lowercase letters. No numbers or symbols.
                            </ResponsiveText>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
            <View style={styles.bottomArea}>
                {!isValid ? (
                    <ResponsiveText style={styles.errorText}>
                        Fill all {wordsCount} words (letters only) to continue.
                    </ResponsiveText>
                ) : (
                    <ResponsiveText style={styles.okText}>All good—ready to import.</ResponsiveText>
                )}

                <Spacer customHeight={hp(1)} />
                <RoundButton
                    btnTitle={isSubmitting ? "Importing..." : "Import Wallet"}
                    disabled={!isValid || isSubmitting}
                    btnStyles={styles.btn1Styles}
                    titleStyles={styles.btn1TitleStyles}
                    onPressBtn={() => onImport()}
                />
                <Spacer customHeight={hp(1)} />
                <RoundButton
                    btnTitle={'Back to Setup'}
                    btnStyles={styles.btn2Styles}
                    titleStyles={styles.btn2TitleStyles}
                    onPressBtn={() => props?.navigation.goBack()}
                />
            </View>
        </MainContainer>

    );
}

function TogglePill({ label, active, onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                styles.pill,
                active ? { backgroundColor: colors.white } : null,
            ]}>
            <ResponsiveText style={[styles.pillText, active ? { color: "#1B1F24" } : null]}>
                {label}
            </ResponsiveText>
        </TouchableOpacity>
    );
}


