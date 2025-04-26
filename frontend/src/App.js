import React, { useState } from "react";
import { getContract } from "./connectWallet";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");

  const handleSubmit = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.submitArtifact(ipfsHash, title, description);
      await tx.wait();
      alert("Artifact submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>EchoChain Upload</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />
      <input
        placeholder="IPFS Hash"
        value={ipfsHash}
        onChange={(e) => setIpfsHash(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />
      <button onClick={handleSubmit}>Submit Artifact</button>
    </div>
  );
}

export default App;
