import { BrowserProvider, Contract } from "ethers";
import EchoChainABI from "./EchoChainABI.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export async function getContract() {
  if (!window.ethereum) throw new Error("MetaMask not installed");

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(CONTRACT_ADDRESS, EchoChainABI, signer);

  return contract;
}
