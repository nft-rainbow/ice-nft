# ICE NFTs

This project is developed with [Hardhat](https://hardhat.org/). Which is a Ethereum development environment for professionals.

## Contract Features

The main contract file is `contracts/ICENFT.sol`.

1. ERC115
2. Mint/Burn
3. Pauseable
4. NFT metadata uri upgradeable
5. Contract upgradeable

## Pre-requisites

1. Node.js v18+
2. [yarn](https://yarnpkg.com/)

## How to setup

Clone this project and install dependencies:

```bash
git clone https://github.com/nft-rainbow/ice-nft.git
yarn  # install dependencies
```

Add `.env` file to the root of the project:

```bash
cp .env.example .env
```

Fill in the environment variables in `.env` file.

`PRIVATE_KEY` is the private key of the account that will deploy the contract, which should have some tokens to pay for the gas fee.

## Common operations

### Compile

```bash
npx hardhat compile
```

### Deploy contract

```bash
npx hardhat run scripts/deployIceNft.ts --network ecfx_testnet
```

After contract deployed, config `ICE_NFT` in `.env` file.

### Mint NFT

```bash
npx hardhat run scripts/mintNft.ts --network ecfx_testnet
```

## Other

1. [Check Hardhat documentation for more usage guide](https://hardhat.org/getting-started/)
2. [Check ethers.js documentation for how to interact contract with js/ts language](https://docs.ethers.org/v6/)
