const { groth16 } = require("snarkjs");
const circomlibjs = require("circomlibjs");
const appRoot = require('app-root-path');

const ascii_to_dec = (str) => {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }

    let res = arr1.join("");
    let dec = BigInt("0x" + res);
    return dec.toString();
}

async function generateProof(preImage,calldata1,calldata2) {

    const poseidon = await circomlibjs.buildPoseidon();
    const preImageInDec = ascii_to_dec(preImage);
    const hashVal = poseidon.F.toString(poseidon([preImageInDec.toString()]));
    const hashF = poseidon.F.toString(poseidon([hashVal]));
    const { proof, publicSignals } = await groth16.fullProve(
        {
            preHash: hashVal,
            hash: hashF,
            calldata1_pub:calldata1,
            calldata1_priv:calldata1,
            calldata2_pub:calldata2,
            calldata2_priv:calldata2
        },
        `${appRoot}/proofGen/circuit.wasm`,
        `${appRoot}/proofGen/circuit_0000.zkey`
    );
    const rawcalldata = await groth16.exportSolidityCallData(
        proof,
        publicSignals
      );
      jsonCalldata = JSON.parse("[" + rawcalldata + "]");
      return { jsonCalldata };
}

module.exports = { generateProof };