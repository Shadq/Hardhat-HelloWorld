const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("HelloWorld", () => {
  let helloWorldFactory, helloWorldContract;
  beforeEach(async () => {
    helloWorldFactory = await ethers.getContractFactory("HelloWorld");
    helloWorldContract = await helloWorldFactory.deploy();
  });

  it("should be equal to hello world", async () => {
    const string = "hello world";
    const retrievedString = await helloWorldContract.greter();
    assert.equal(string, retrievedString);
  });
});
