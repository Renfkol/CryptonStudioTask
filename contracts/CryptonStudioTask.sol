//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract CryptonStudioTask {

    struct TransferInfo{
        uint amount;
        address sender;
    }

    TransferInfo[] transfers;
    address public owner;
    
    constructor() {
        owner = msg.sender;
    }

    modifier requireOwner(){
        require(owner ==msg.sender,"Not an owner");
        _;
    }
    
    function getTransfer(uint _index) public view returns(TransferInfo memory){
        require(msg.sender == owner);
        return transfers[_index];
    }

    function withdrawTo(address payable _to) public requireOwner{
        _to.transfer(address(this).balance);
    }

    receive() external payable{
        TransferInfo memory newTransfer = TransferInfo(msg.value, msg.sender);
        transfers.push(newTransfer);
    }  
}
