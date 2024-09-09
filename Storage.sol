// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
contract Storage {
    uint256 private data;
 
    // Store a value
    function set(uint256 _data) public {
        data = _data;
    }
 
    // Retrieve the stored value
    function get() public view returns (uint256) {
        return data;
    }
}