import { ethers } from "hardhat";

async function main() {
    const IceNft = await ethers.getContractAt("ICENFT", process.env.ICE_NFT as string);
    const receiver = '0x131ae09b5bfd817d71084ded1ea16a29bcadc32e';
    const tokenId = 1;
    const amount = 1;
    const data = '0x'; // empty data
    const tx = await IceNft.mint(receiver, tokenId, amount, data);
    await tx.wait();
    console.log('minted');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
