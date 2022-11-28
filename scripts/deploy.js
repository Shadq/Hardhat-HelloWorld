const { network, ethers, run } = require("hardhat");

const main = async () => {
  console.log("Deploying...");
  const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
  const helloWorldContract = await helloWorldFactory.deploy();
  console.log(helloWorldContract);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await helloWorldContract.deployTransaction.wait(6);
    await verify(helloWorldContract.address, []);
  }
};

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArgs: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("contract already verified");
    } else {
      console.log(error);
    }
  }
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
