//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        console.log("reading");
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("setting");
        greeting = _greeting;
    }
}
