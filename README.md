# EchoChain dApp

This project is a full-stack decentralized application (dApp) built with a React.js frontend and Solidity smart contracts deployed using Hardhat. It allows users to connect their crypto wallet and interact with the EchoChain smart contract, including uploading text to the blockchain.

## Project Description
Preservation of classical texts – ancient Latin, Greek—and its scholarly commentary is typically done centralized. This makes these critical texts and knowledge space fragile and vulnerable to loss or manipulation over time. We’re rebuilding the Library of Alexandria—but fireproof. Our solution is EchoChain, a decentralized archive for classical texts and scholarly commentary. Users can permanently submit, store, and annotate classical works (poetry, philosophy, history) on the blockchain. We integrate the Moonbase Alpha parachain with MetaMask, leveraging Polkadot Asset Hub and Remix to ensure that these cultural and intellectual artifacts are immutable, transparently attributed, and accessible to future generations. 

## Project Structure

frontend/ - React.js frontend app  
hardhat/ - Hardhat project (Solidity contracts, deployment scripts, and testing)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/echochain.git
cd echochain
```
## Install Dependencies
cd frontend
npm install
cd ../hardhat
npm install

## Deploy Smart Contracts
cd hardhat
npx hardhat run scripts/deploy.js --network localhost

## Run Frontend
cd frontend
npm start

The frontend will be available at http://localhost:3000. Connect your wallet (e.g., MetaMask) and interact with the deployed contract.

## Video Link

