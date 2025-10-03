import { openDatabase } from 'react-native-sqlite-storage';


export const db = openDatabase(
    { name: 'Xendora.db', createFromLocation: 1 },
    () => {
        console.log('Database opened successfully');
        createTables(); 
    },
    error => {
        console.log('SQL Error: ' + error);
    },
);

// for call create table function
export const createTables = () => {
    createTable();
    createTableforwallet();
};

// for creating tables
const createTable = () => {
    try {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS BrowserTab (id INTEGER PRIMARY KEY AUTOINCREMENT, Url TEXT, name TEXT, Icon TEXT)',
                [],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                    } else {
                    }
                },
                error => {
                    console.log('Error creating BrowserTab table:', error);
                },
            );
        });

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS BrowserBookmarks (id INTEGER PRIMARY KEY AUTOINCREMENT, Url TEXT, name TEXT, Icon TEXT)',
                [],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                    } else {
                    }
                },
                error => {
                    console.log('Error creating BrowserBookmarks table:', error);
                },
            );
        });

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS BrowserHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, Url TEXT, name TEXT, Icon TEXT)',
                [],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                    } else {
                    }
                },
                error => {
                    console.log('Error creating BrowserHistory table:', error);
                },
            );
        });

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, Imageurl TEXT, name TEXT, Bio TEXT , location TEXT, website TEXT)',
                [],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                    } else {
                    }
                },
                error => {
                    console.log('Error creating Contacts table:', error);
                },
            );
        });

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS ContactAddress (id INTEGER PRIMARY KEY AUTOINCREMENT, Contactid INTEGER, walletAddress TEXT, AddressTyp TEXT , image TEXT)',
                [],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                    } else {
                    }
                },
                error => {
                    console.log('Error creating ContactAddress table:', error);
                },
            );
        });
    } catch (error) {
        console.log('error from creating table', error);
    }
};

const createTableforwallet = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS CheckHandle (
                name TEXT DEFAULT 'false'
            )`,
            [],
            () => {
                console.log('Table CheckHandle created successfully');

                // Insert default data if table is empty
                tx.executeSql(
                    `INSERT INTO CheckHandle (name) 
                     SELECT 'false' 
                     WHERE NOT EXISTS (SELECT 1 FROM CheckHandle)`,
                    [],
                    () => console.log("Default name set to 'false'"),
                    error => console.log('Error setting default name:', error),
                );
            },
            error => {
                console.log('Error creating CheckHandle table:', error);
            },
        );
    });
};

// Insert wallets in database
export const insertWallet = (
    name,
    publicAddress,
    PrivateKey,
    chainName,
    scretPharase,
    btcWalletAddress,
    btcPrivateKey,
    solanaAddress,
    solanaPrivateKey,
    isBackup,
    tronAddress,
    tronPrivateKey,
) => {
    return new Promise(async (resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE tblWallet set active=? where active=?',
                [0, 1],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                    } else console.log('Updation Failed========>');
                },
            );
        });

        try {
            const imageOfwallet = await getWalletRandomImage();

            db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO tblWallet(name, publicAddress, PrivateKey,chainName,active,scretPharase,btcName,btcWalletAddress,btcPrivateKey,solanaAddress,solanaPrivateKey,cardanowaletid,cardanowaletAddress,isBackup,account,tronAddress,tronPrivateKey) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                    [
                        name,
                        publicAddress,
                        PrivateKey,
                        imageOfwallet,
                        1,
                        scretPharase,
                        'Bitcoin',
                        btcWalletAddress,
                        btcPrivateKey,
                        solanaAddress,
                        solanaPrivateKey,
                        '',
                        '',
                        isBackup,
                        0,
                        tronAddress,
                        tronPrivateKey,
                    ],
                    (tx, results) => {
                        if (results.rowsAffected > 0) {
                            resolve(results?.insertId);
                        } else {
                            reject({
                                status: false,
                                message: 'error to insert on db',
                            });
                        }
                    },
                    error => {
                        console.log('Error adding wallets:', error);
                    },
                );
            });
        } catch (error) {
            console.log('error::::::', error);
            reject({
                status: false,
                message: error,
            });
        }
    });
};

// Insert All Chains in database
export const InsertAllChains = (waletid, chainsarray) => {
    return new Promise((resolve, reject) => {
        chainsarray.map(item => {
            db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO tblToken(tokenName,symbol, decimals, active,contractAbi, chainName, walletId, tokenAddress, type,rpcUrl,rpcUrlname, dollorValue, usd_24h_change, current_price, balance,isEvm, tokenlogo,orderno,transactionStatus,chainId) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                    [
                        item.tokenName,
                        item.symbol,
                        item.decimals,
                        item.isactive,
                        null,
                        item.chainName,
                        waletid,
                        item.tokenAddress,
                        item.type,
                        item.rpcUrl,
                        item.rpcUrlname,
                        0,
                        0,
                        0,
                        0,
                        item.isEvm,
                        item.tokenImage,
                        item.orderno,
                        0,
                        item.chainId,
                    ],
                    (tx, results) => {
                        resolve('chain Inserteddd');
                    },
                );
            });
        });
    });
};