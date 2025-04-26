// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EchoChain {
    uint public nextArtifactId = 0;

    struct Artifact {
        address creator;
        string ipfsHash;
        string title;
        string description;
    }

    struct Commentary {
        address commenter;
        uint artifactId;
        string ipfsHash;
        string commentText;
    }

    mapping(uint => Artifact) public artifacts;
    mapping(uint => Commentary[]) public artifactCommentaries;

    event ArtifactSubmitted(uint artifactId, address creator);
    event CommentarySubmitted(uint artifactId, uint commentaryId, address commenter);

    function submitArtifact(string memory ipfsHash, string memory title, string memory description) public {
        artifacts[nextArtifactId] = Artifact({
            creator: msg.sender,
            ipfsHash: ipfsHash,
            title: title,
            description: description
        });

        emit ArtifactSubmitted(nextArtifactId, msg.sender);
        nextArtifactId++;
    }

    function submitCommentary(uint artifactId, string memory ipfsHash, string memory commentText) public {
        require(artifactId < nextArtifactId, "Artifact does not exist");

        artifactCommentaries[artifactId].push(Commentary({
            commenter: msg.sender,
            artifactId: artifactId,
            ipfsHash: ipfsHash,
            commentText: commentText
        }));

        emit CommentarySubmitted(artifactId, artifactCommentaries[artifactId].length - 1, msg.sender);
    }

    function getCommentaryCount(uint artifactId) public view returns (uint) {
        return artifactCommentaries[artifactId].length;
    }
}
