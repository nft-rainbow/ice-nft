import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const { PRIVATE_KEY } = process.env;

// @ts-ignore
task("mint", "Mint NFT")
    .addParam("receiver", "The receiver's address")
    .addParam("tokenId", "The tokenId")
    .setAction(async (args: {receiver: string, tokenId: number}, hre: any) => {
        const IceNft = await hre.ethers.getContractAt("ICENFT", process.env.ICE_NFT as string);
        const { receiver, tokenId } = args;
        const amount = 1;
        const data = '0x'; // empty data
        const tx = await IceNft.mint(receiver, tokenId, amount, data);
        await tx.wait();
        console.log(`Mint ${tokenId} to ${receiver} tx hash: ${tx.hash}`);
    });

// @ts-ignore
task("mint721", "Mint 721 NFT")
    .addParam("receiver", "The receiver's address")
    .addParam("tokenUri", "The token uri")
    .setAction(async (args: {receiver: string, tokenUri: number}, hre: any) => {
        const IceNft = await hre.ethers.getContractAt("ICENFT721", process.env.ICE_NFT721 as string);
        const { receiver, tokenUri } = args;
        const tx = await IceNft.safeMint(receiver, tokenUri);
        await tx.wait();
        console.log(`Mint NFT to ${receiver} tx hash: ${tx.hash}`);
    });

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    networks: {
        ecfx_testnet: {
            url: "https://evmtestnet.confluxrpc.com",
            accounts: [PRIVATE_KEY as string],
        },
        ecfx: {
            url: "https://evm.confluxrpc.com",
            accounts: [PRIVATE_KEY as string],
        }
    }
};

export default config;
