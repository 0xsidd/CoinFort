// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import {Groth16Verifier} from "./Verifier.sol";
import {Wallet} from "./Wallet.sol";

contract WalletFactory is Groth16Verifier {
    mapping(string => bool) public isUserNameTaken;
    mapping(string => bytes32) public usernameToPassword;
    mapping(string => address) public usernameToWalletAddress;

    error UserAlreadyRegistered();
    error ZKPVerificationFailed();

    event UserRegistered(
        bytes32 indexed _hash,
        string indexed _userName,
        uint256 indexed timestamp
    );
    event WalletCalled(
        string indexed _username,
        address indexed _walletAddress
    );

    function registerUser(bytes32 _hash, string memory _userName) public {
        if (isUserNameTaken[_userName]) {
            revert UserAlreadyRegistered();
        }
        isUserNameTaken[_userName] = true;
        usernameToPassword[_userName] = _hash;
        Wallet wallet = new Wallet();
        usernameToWalletAddress[_userName] = address(wallet);

        emit UserRegistered(_hash, _userName, block.timestamp);
    }

    function callWallet(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[3] calldata _pubSignals,
        string calldata _userName,
        bytes[] memory _callData
    ) public {
        if (!verifyProof(_pA, _pB, _pC, _pubSignals)) {
            revert ZKPVerificationFailed();
        }

        Wallet wallet = Wallet(payable(usernameToWalletAddress[_userName]));
        wallet.multicall(_callData);
        emit WalletCalled(_userName, address(wallet));
    }
}
