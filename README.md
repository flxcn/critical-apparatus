# EchoChain dApp

This project is a full-stack decentralized application (dApp) built with a React.js frontend and Solidity smart contracts deployed using Hardhat. It allows users to connect their crypto wallet and interact with the EchoChain smart contract, including uploading text to the blockchain.

## Project Structure

frontend/ - React.js frontend app  
hardhat/ - Hardhat project (Solidity contracts, deployment scripts, and testing)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/echochain.git
cd echochain

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
