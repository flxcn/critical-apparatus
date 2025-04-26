const { ethers } = require("hardhat");

async function main() {
  const EchoChain = await ethers.getContractFactory("EchoChain");
  const echoChain = await EchoChain.deploy(); 

  console.log(`EchoChain deployed to address: ${await echoChain.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
