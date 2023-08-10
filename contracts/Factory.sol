// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import {Groth16Verifier} from "./Verifier.sol";
import {Wallet} from "./Wallet.sol";

contract WalletFactory is Groth16Verifier {
    mapping(string => bool) public isUserNameTaken;
    mapping(string => bytes32) public usernameToPassword;
    mapping(string => address) public usernameToWalletAddress;
    mapping(bytes32 => bool) public nullifier;


    error UserNotRegistered();
    error UserAlreadyRegistered();
    error ZeroAmountDeposit();
    error IncorrectSecret();
    error CallFailed();
    error InvalidHash();
    error InvalidMsgSender();
    error ZKPVerificationFailed();
    error InfufficientETHBalance();
    error InvalidCreds();
    error EthTransferFailed();
    error CanNotUseSameProofAgain();
    error InvalidCalldata();

    event UserRegistered(
        bytes32 indexed _hash,
        string indexed _userName,
        uint256 indexed _timestamp
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
        bytes32 hash = bytes32(_pubSignals[0]);
        (bytes32 cd1,bytes32 cd2) = hashAndSplitCalldata(_callData);

        if(uint(cd1) != _pubSignals[1] || uint(cd2) != _pubSignals[2]){
            revert InvalidCalldata();
        }

        bytes32 nul = hashMultipleBytes32(_pA, _pB, _pC, _pubSignals);

        if (nullifier[nul]) {
            revert CanNotUseSameProofAgain();
        }
        if (!verifyProof(_pA, _pB, _pC, _pubSignals)) {
            revert ZKPVerificationFailed();
        }

        if ((usernameToPassword[_userName]) != (hash)) {
            revert InvalidCreds();
        }

        Wallet wallet = Wallet(payable(usernameToWalletAddress[_userName]));
        wallet.multicall(_callData);
        emit WalletCalled(_userName,address(wallet));
    }

    function hashMultipleBytes32(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[3] calldata _pubSignals
    ) internal view returns (bytes32) {
        bytes memory concatenatedValues = abi.encodePacked(
            _pA[0],
            _pA[1],
            _pB[0][0],
            _pB[0][1],
            _pB[1][0],
            _pB[1][1],
            _pC[0],
            _pC[1],
            _pubSignals[0],
            _pubSignals[1],
            _pubSignals[2],
            block.chainid
        );
        bytes32 hash = keccak256(concatenatedValues);
        return hash;
    }

    function hashAndSplitCalldata(
        bytes[] memory _calldata
    ) public view returns (bytes32 paddedI, bytes32 paddedJ) {
        bytes memory concatenatedData = abi.encode(_calldata,block.chainid);
        bytes32 r = keccak256(concatenatedData);
        bytes16 i;
        bytes16 j;
        assembly {
            i := r
            j := shl(128, r)
        }
        assembly {
            mstore(0, 0x00000000000000000000000000000000)
            mstore(0x10, i)
            paddedI := mload(0)
        }
        assembly {
            mstore(0, 0x00000000000000000000000000000000)
            mstore(0x10, j)
            paddedJ := mload(0)
        }
    }
}
