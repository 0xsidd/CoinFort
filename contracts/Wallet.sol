// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Wallet is Ownable {
    function multicall(bytes[] memory _data) public payable onlyOwner {
        for (uint256 i = 0; i < _data.length; i++) {
            (address target, uint256 ethValue, bytes memory callData) = abi
                .decode(_data[i], (address, uint256, bytes));
            (bool success, ) = target.call{value: ethValue}(callData);
            require(success, ".call() failed");
        }
    }
    receive() external payable {}
}
