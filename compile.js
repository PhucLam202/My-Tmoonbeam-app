const fs = require("fs");
const solc = require("solc");
 
const source = fs.readFileSync("Storage.sol", "utf8");
 
const input = {
  language: "Solidity",
  sources: {
    "Storage.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};
 
const output = JSON.parse(solc.compile(JSON.stringify(input)));
const abi = output.contracts["Storage.sol"].Storage.abi;
const bytecode = output.contracts["Storage.sol"].Storage.evm.bytecode.object;
 
fs.writeFileSync("StorageABI.json", JSON.stringify(abi));
fs.writeFileSync("StorageBytecode.json", bytecode);
console.log("Contract compiled and ABI/bytecode saved.");