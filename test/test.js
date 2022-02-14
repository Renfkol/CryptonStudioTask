const { expect } = require("chai");
const { ethers } = require("hardhat");
const TransferArtifact = require('../artifacts/contracts/CryptonStudioTask.sol/CryptonStudioTask.json');

describe("CryptonStudioTask", function () {
  it("Should send to contact", async function () {
    const CryptonStudioTask = await ethers.getContractFactory("CryptonStudioTask");
    const cryptonStudioTask = await CryptonStudioTask.deploy();
    await cryptonStudioTask.deployed();

    const [acc1,acc2] = await ethers.getSigners();
    const contractAddr = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

    const tx = {
      to: contractAddr,
      value: ethers.utils.parseEther('1')
    }

    const txSend = await acc2.sendTransaction(tx);
    await txSend.wait();

    expect(txSend!=null);
  });
});