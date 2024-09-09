const { ethers } = require("ethers");
const fs = require("fs");
 
async function main() {
  // Load the ABI and bytecode
  const abi = JSON.parse(fs.readFileSync("StorageABI.json", "utf8"));
  const bytecode = fs.readFileSync("StorageBytecode.json", "utf8");
 
  // Set up provider and wallet
  const provider = new ethers.JsonRpcProvider("https://rpc.api.moonbase.moonbeam.network");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
 
  const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);
 
  const contract = await contractFactory.deploy();
 
  console.log("Contract deployed at:", contract.target);
}
 
main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});