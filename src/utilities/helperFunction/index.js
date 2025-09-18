import Clipboard from "@react-native-clipboard/clipboard";
import Toast from 'react-native-simple-toast';

const copyToClipboard = async text => {
    try {
        await Clipboard.setString(text);
        Toast.showWithGravity('Copied.', Toast.SHORT, Toast.BOTTOM);
    } catch (error) { }
};
const copyToClipboardNotoast = async text => {
    try {
        await Clipboard.setString(text);
    } catch (error) { }
};

const fetchCopiedText = async () => {
    try {
        const text = await Clipboard?.getString();
        return text;
    } catch (error) {
        return null;
    }
};

export const copyPaste = {
    copy: copyToClipboard,
    paste: fetchCopiedText,
    copynoToast: copyToClipboardNotoast
};