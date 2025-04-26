Install Rust and nightly toolchain: 
curl https://sh.rustup.rs -sSf | sh
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly

Make sure to install:
cargo install cargo-contract --force

This is how to build the contract: 
cargo +nightly contract build

For Rhea it says:
rustc 1.88.0-nightly (b4c8b0c3f 2025-04-25)
