#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod echochain {
    use ink::storage::Mapping;

    #[derive(scale::Encode, scale::Decode, Clone, Debug, PartialEq, Eq)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct Artifact {
        creator: AccountId,
        ipfs_hash: String,
        title: String,
        description: String,
    }

    #[derive(scale::Encode, scale::Decode, Clone, Debug, PartialEq, Eq)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct Commentary {
        commenter: AccountId,
        artifact_id: u64,
        ipfs_hash: String,
        comment_text: String,
    }

    #[ink(storage)]
    pub struct EchoChain {
        next_artifact_id: u64,
        artifacts: Mapping<u64, Artifact>,
        commentaries: Mapping<u64, Vec<Commentary>>,
    }

    impl EchoChain {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                next_artifact_id: 0,
                artifacts: Mapping::default(),
                commentaries: Mapping::default(),
            }
        }

        #[ink(message)]
        pub fn submit_artifact(&mut self, ipfs_hash: String, title: String, description: String) {
            let caller = self.env().caller();
            let artifact = Artifact {
                creator: caller,
                ipfs_hash,
                title,
                description,
            };
            self.artifacts.insert(self.next_artifact_id, &artifact);
            self.next_artifact_id += 1;
        }

        #[ink(message)]
        pub fn submit_commentary(&mut self, artifact_id: u64, ipfs_hash: String, comment_text: String) {
            let caller = self.env().caller();
            let commentary = Commentary {
                commenter: caller,
                artifact_id,
                ipfs_hash,
                comment_text,
            };
            let mut comments = self.commentaries.get(artifact_id).unwrap_or_default();
            comments.push(commentary);
            self.commentaries.insert(artifact_id, &comments);
        }

        #[ink(message)]
        pub fn get_commentary_count(&self, artifact_id: u64) -> u64 {
            match self.commentaries.get(artifact_id) {
                Some(comments) => comments.len() as u64,
                None => 0,
            }
        }
    }
}
