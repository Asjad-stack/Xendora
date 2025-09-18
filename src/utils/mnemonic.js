
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Mnemonic, randomBytes } from 'ethers';
import 'react-native-get-random-values';

const createMnemonic = () => {
    const entropy = randomBytes(16); // 128-bit entropy
    const phrase = Mnemonic.entropyToPhrase(entropy); // returns a string directly
    return phrase; // ✅ string like "abandon ... zoo"
};

const isValidMnemonic = mnemonic => {
    return ethers.utils.isValidMnemonic(mnemonic);
};

const loadMnemonic = (successCallback, failCallback) => {
    AsyncStorage.getItem('mnemonic')
        .then(res => {
            successCallback(res);
        })
        .catch(err => {
            console.log('mnemonic Utils ERROR::::: ', err);
            failCallback();
        });
};

export { createMnemonic, isValidMnemonic, loadMnemonic };
