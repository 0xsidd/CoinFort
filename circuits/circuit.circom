pragma circom 2.1.4;

include "../node_modules/circomlib/circuits/poseidon.circom";

template PoseidonHasher() {
    signal input preHash;
    signal input hash;
    signal input calldata1_pub;
    signal input calldata1_priv;
    signal input calldata2_pub;
    signal input calldata2_priv;
    
    component hasher = Poseidon(1);
    hasher.inputs[0] <== preHash;
    hash === hasher.out;

    calldata1_pub === calldata1_priv;
    calldata2_pub === calldata2_priv;


}

component main { public [hash,calldata1_pub,calldata2_pub] } = PoseidonHasher();