import { useMemo, useState } from "react";

const useImportWallet = () => {

    const [wordsCount, setWordsCount] = useState(12);
    const [words, setWords] = useState(Array(24).fill(""));
    const [isSubmitting, setIsSubmitting] = useState(false);

    const usedWords = useMemo(() => words.slice(0, wordsCount), [words, wordsCount]);
    const isValid = useMemo(() => {
        // Simple validation: all fields filled with letters only
        if (usedWords.some(w => !w || !/^[a-z]+$/.test(w))) return false;
        // (Optional) You can validate against BIP39 list here
        return true;
    }, [usedWords]);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText?.(); // RN Web poly, for RN use Clipboard
            if (!text) return;
            const tokens = text
                .trim()
                .toLowerCase()
                .replace(/\n/g, " ")
                .split(/\s+/)
                .filter(Boolean);
            if (![12, 24].includes(tokens.length)) {
                Alert.alert("Invalid phrase", "Please paste a 12 or 24 word seed phrase.");
                return;
            }
            setWordsCount(tokens.length);
            const next = Array(24).fill("");
            tokens.forEach((w, i) => (next[i] = w.replace(/[^a-z]/g, "")));
            setWords(next);
            // focus last
            inputsRef.current[tokens.length - 1]?.focus();
        } catch (e) {
            Alert.alert("Paste failed", "Could not read from clipboard.");
        }
    };

    const onImport = async () => {
        if (!isValid) return;
        setIsSubmitting(true);
        try {
            // TODO: Replace with actual wallet import (e.g., bip39.mnemonicToSeedSync + hd derivation)
            // For now, mock success:
            setTimeout(() => {
                setIsSubmitting(false);
                Alert.alert("Wallet imported", "Your wallet has been securely imported.");
                // navigation?.replace?.("Home");
            }, 900);
        } catch (e) {
            setIsSubmitting(false);
            Alert.alert("Import failed", e?.message || "Please try again.");
        }
    };

    const handleChange = (idx, val) => {
        const next = [...words];
        const sanitized = val.toLowerCase().replace(/[^a-z]/g, "");
        next[idx] = sanitized;
        setWords(next);

        // auto-advance
        if (sanitized && idx < wordsCount - 1) {
            inputsRef.current[idx + 1]?.focus();
        }
    };



    return {
        wordsCount, setWordsCount,
        words, setWords,
        isSubmitting, setIsSubmitting,
        handlePaste,
        onImport,
        handleChange,
        isValid,
    }
}

export default useImportWallet
