const { groth16 } = require("snarkjs");
const circomlibjs = require("circomlibjs");
const appRoot = require('app-root-path');


async function generateProof(preImage,calldata1,calldata2) {

    const poseidon = await circomlibjs.buildPoseidon();
    const preImageInDec = preImage;
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
        `${appRoot}/circuits/build/circuit_js/circuit.wasm`,
        `${appRoot}/circuits/build/keys/circuit_0000.zkey`
    );
    return { proof, publicSignals };
}

module.exports = { generateProof };