import { useEffect, useState } from "react";
import { generateAllWallets } from "../../../../walletCreationHelper/index"
import { InsertAllChains, insertWallet } from '../.././../../Database/DataBase';
import { Routes } from "../../../../constants";
// import { useDispatch } from 'react-redux';


const useConnfirmSeedPhrase = (props) => {

    // const dispatch = useDispatch()


    const previousSeedPhrase = props?.route?.params?.mnemonic
    const seedWords = previousSeedPhrase.split(' ');

    // Use_States
    const [selectedWord, setselectedWord] = useState('');
    const [RandoWordNumber, setRandoWordNumber] = useState([]);
    const [isdisabled, setisdisabled] = useState(true);
    const [targetIndex, setTargetIndex] = useState(0);
    const [randomSeedPhrases, setRandomSeedPhrases] = useState([]);
    const [Loading, setLoading] = useState(false);

    const handleSeedPhraseSelection = (word) => {
        console.log('wordword', word, RandoWordNumber);
        setselectedWord(word)
        if (word == RandoWordNumber[targetIndex].word) {
            console.log('successssss')
            setisdisabled(false)
        }
        else {
            console.log('falseeeeeeeee')
            setisdisabled(true)
        }
    };

    function generateUniqueRandomWords(words, index) {
        if (words.length !== 12) {
            throw new Error("Please provide exactly 12 words for the seed phrase.");
        }

        const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
        const results = [];

        for (let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * numbers.length);
            const wordIndex = numbers[index] - 1; // Adjust for array index (0-based)
            results.push({ number: numbers[index], word: words[wordIndex] });
            numbers.splice(index, 1); // Remove the selected number to avoid repetition
        }

        return results;
    }

    function getRandomWordsWithSpecified(words, specifiedWord) {
        if (words.length !== 12) {
            throw new Error("The words array must contain exactly 12 words.");
        }
        if (!words.includes(specifiedWord)) {
            throw new Error("The specified word must be part of the initial 12 words.");
        }

        let shuffled = [...words]; // Copy to avoid mutating the original array
        shuffled.sort(() => 0.5 - Math.random()); // Shuffle the array

        // Select the first 5 words
        const selected = shuffled.slice(0, 5);

        // Check if the specified word is already included
        if (!selected.includes(specifiedWord)) {
            // If not included, add the specified word at a random index within the selected array
            const insertIndex = Math.floor(Math.random() * selected.length);
            selected.splice(insertIndex, 0, specifiedWord);
        } else {
            // If the specified word is already included, add the next unique word from the shuffled list
            for (let i = 5; i < shuffled.length; i++) {
                if (shuffled[i] !== specifiedWord) {
                    selected.push(shuffled[i]); // Add as the last one if the list has specified word already
                    break;
                }
            }
        }
        return selected;
    }

    useEffect(() => {

        const selectedWords = generateUniqueRandomWords(seedWords);
        const randomword = getRandomWordsWithSpecified(seedWords, selectedWords[0].word)
        setRandomSeedPhrases(randomword)
        setRandoWordNumber(selectedWords)

    }, []);

    const handleNext = async () => {
        try {
            console.log('targetIndextargetIndex', targetIndex);
            if (targetIndex <= 1) {
                setselectedWord('')
                setisdisabled(true)
                setTargetIndex(targetIndex + 1)
                const randomword = getRandomWordsWithSpecified(seedWords, RandoWordNumber[targetIndex + 1].word)
                console.log('randomwordrandomwordrandomword', randomword);
                setRandomSeedPhrases(randomword)

            } else {

                try {
                    setLoading(true)
                    setTimeout(async () => {
                        console.log('create wallet heareeeeeeeeeeeeeeeeeeee', previousSeedPhrase.trim())

                        const allwallets = await generateAllWallets(previousSeedPhrase.trim())
                        setLoading(false)
                        console.log('allwalletsallwalletsallwallets', allwallets);

                        const waletresponse = await insertWallet(
                            'Multi-Chain-Wallet',
                            allwallets?.evmWallet?.address,
                            allwallets?.evmWallet?.privateKey,
                            'Ethereum',
                            previousSeedPhrase.trim(),
                            allwallets?.bitcoin?.address,
                            allwallets?.bitcoin?.privateKey,
                            allwallets?.solana?.address,
                            allwallets?.solana?.privateKey,
                            1,
                            allwallets?.tron?.address,
                            allwallets?.tron?.privateKey,

                        )

                        console.log('waletresponsewaletresponse', waletresponse);

                        if (waletresponse) {

                            let responsechains = await InsertAllChains(waletresponse, MultiChainChainsArray)
                            console.log('responsechainsresponsechainsresponsechains', responsechains);
                            if (responsechains) {
                                setLoading(false)
                                // dispatch(SaveUserData({}));

                                props.navigation.replace(Routes.successScreen)
                            }
                        }

                    }, 2);


                } catch (error) {
                    setLoading(false)
                    console.log('error n creating wallet on create flow', error);

                }

                // try {
                //     await appsFlyer.logEvent('af_create_wallet');
                // } catch (e) {
                //     console.warn('AppsFlyer event failed:', e);
                // }

            }
        } catch (error) {

            setLoading(false)
            console.log('errorerrorerror', error);

        }

    }


    return {
        randomSeedPhrases,
        targetIndex,
        handleNext,
        RandoWordNumber,
        isdisabled,
        handleSeedPhraseSelection,
        selectedWord,
        Loading
    }
}

export default useConnfirmSeedPhrase

