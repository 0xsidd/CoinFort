// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;
import {Wallet} from "./Wallet.sol";

contract WalletFactory {
    mapping(string => bool) public isUserNameTaken;
    mapping(string => bytes32) public usernameToPassword;
    mapping(string => address) public usernameToWalletAddress;

    error UserAlreadyRegistered();

    event UserRegistered(
        bytes32 indexed _hash,
        string indexed _userName,
        uint256 indexed timestamp
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
}