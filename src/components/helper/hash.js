// const circomlibjs = require("circomlibjs");
import * as circomlibjs from "circomlibjs";


export const ascii_to_dec = (str)=> {
  var arr1 = [];
  for (var n = 0, l = str.length; n < l; n++) {
    var hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }

  let res = arr1.join("");
  //   //(res);
  let dec = BigInt("0x" + res);
  return dec.toString();
}

export const hexToDecimal =(hex)=> {
  const decimal = BigInt(hex, 16);
  return decimal;
}

const decimalToHex =(decimalNumber)=> {
  let hexadecimal = BigInt(decimalNumber).toString(16);
  let len = hexadecimal.length;
  let defined = 64;
  let diff = defined - len;
  for(let i =0;i<diff;i++){
    hexadecimal =  `0${hexadecimal}`;
  }
  return `0x${hexadecimal}`;
}



export const generatePoseidonHash = async (value) => {
    value = ascii_to_dec(value);
    const poseidon = await circomlibjs.buildPoseidon();
    const hashInt = poseidon.F.toString(poseidon([value]));
    const hash = poseidon.F.toString(poseidon([hashInt]));
    const finalHash = decimalToHex(hash);
    return { finalHash };
};
