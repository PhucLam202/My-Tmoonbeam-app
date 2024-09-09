const { ethers } = require("ethers");
const fs = require("fs");
 
async function main() {
 
  const abi = JSON.parse(fs.readFileSync("StorageABI.json", "utf8"));
 
  const provider = new ethers.JsonRpcProvider("https://rpc.api.moonbase.moonbeam.network");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
 
  const contractAddress = "0xcf127b5b37801f6Ab3F136d1F29B61554412Db99";
 
  const storageContract = new ethers.Contract(contractAddress, abi, wallet);
 
  const setTx = await storageContract.set(42);
  await setTx.wait();
  console.log("Value set to 42");
 
  const value = await storageContract.get();
  console.log("Stored value:", value.toString());
}
 
 
main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});