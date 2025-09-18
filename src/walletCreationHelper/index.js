

export const generateAllWallets = async (seed) => {

    try {
        const [evmWallet] = await Promise.all([
            generateEvmWallet(seed),
        ]);

        return {
            evmWallet
        }
    } catch (error) {

        console.log('errorerrorerror', error);
        throw error
    }
}

export const generaEvmWalletUnigSeed = async (seed) => {
    try {
        const [evmWallet] = await Promise.all([
            generateEvmWallet(seed),

        ]);

        return {
            evmWallet
        }
    } catch (error) {
        throw error
    }
}