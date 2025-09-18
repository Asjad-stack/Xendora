import { useEffect, useState } from "react";
import { createMnemonic } from "../../../../utils/mnemonic"

const useSeedPhrase = (props) => {


    const [showSeed, setShowSeed] = useState(false);
    const [mnemonic, setMnemonic] = useState([]);

    useEffect(() => {
        const phrase = createMnemonic();
        const phraseArray = phrase.split(" ");
        setMnemonic(phraseArray);
    }, []);

    return {
        showSeed, setShowSeed,
        mnemonic, setMnemonic
    }
}

export default useSeedPhrase

