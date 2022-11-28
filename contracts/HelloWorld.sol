//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract HelloWorld {
    string public helloWorld = "hello world";

    function greter() public view returns (string memory) {
        return helloWorld;
    }
}
