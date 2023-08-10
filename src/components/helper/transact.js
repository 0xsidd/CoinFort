import factoryInstance from "./factoryInstance";

export const transact = async (wallet, proof, calldata, username, gasprice, etimatedGas) => {
    const factory = await factoryInstance();
    const transaction = {
        to: factory.address,
        data: factory.interface.encodeFunctionData('callWallet', [proof[0], proof[1], proof[2], proof[3], username, calldata]),
        gasPrice: gasprice + 10000,
        gasLimit: etimatedGas + 15000
    };
    try{
        let res = await wallet.sendTransaction(transaction);
        let txn = await res.wait();
        if(txn){
            return txn.transactionHash;
        }
        else{
            return false;
        }
    }catch(err){
        alert("txn denied");
    }

}