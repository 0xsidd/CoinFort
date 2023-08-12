import * as circomlibjs from "circomlibjs";
import { ethers } from "ethers";
const abi = new ethers.utils.AbiCoder();
const snarkjs = window.snarkjs;

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

const getProofInternal = async (preImage,calldata1,calldata2, chainid) => {
    const poseidon = await circomlibjs.buildPoseidon();
    const preImageInDec = ascii_to_dec(preImage);
    const hashVal = poseidon.F.toString(poseidon([preImageInDec.toString()]));
    const hashF = poseidon.F.toString(poseidon([hashVal]));
    console.log(snarkjs);
    let { proof, publicSignals } = await snarkjs.groth16.fullProve(
        {
            preHash: hashVal,
            hash: hashF,
            calldata1_pub: calldata1,
            calldata1_priv: calldata1,
            calldata2_pub: calldata2,
            calldata2_priv: calldata2
        },
        "circuit.wasm", "circuit_0000.zkey")

    let rawcalldata = await snarkjs.groth16.exportSolidityCallData(
        proof,
        publicSignals
    );
    let calldata = JSON.parse("[" + rawcalldata + "]");
    return calldata;
}

export const getProof = async(preImage,calldata, chainid)=>{
    // console.log(calldata[0]);
    let callHash = getHashFromCalldata(calldata,chainid);
    let resHash = splitString(callHash);
    let calldata1 = (BigInt(resHash[0])).toString();
    let calldata2 = (BigInt(resHash[1])).toString();
    let proof = await getProofInternal(preImage,calldata1,calldata2,chainid);
    return proof;
}

const splitString = (inputString)=> {
    const halfLength = Math.ceil(inputString.length / 2);
    const firstPart = '0x' + inputString.slice(2, halfLength + 1);
    const secondPart = '0x' + inputString.slice(halfLength + 1);
  
    return [firstPart, secondPart];
  }


export const getHashFromCalldata = (calldata,chainid) => {
    const params = abi.encode(
        ["bytes[]","uint256"],
        [calldata,chainid]
    );

    return (ethers.utils.keccak256(params))

}