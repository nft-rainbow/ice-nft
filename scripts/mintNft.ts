import { ethers } from "hardhat";

async function main() {
    const IceNft = await ethers.getContractAt("ICENFT", process.env.ICE_NFT as string);
    const receiver = '0x7deFad05B632Ba2CeF7EA20731021657e20a7596';
    const tokenId = 1;
    const amount = 1;
    const data = '0x'; // empty data
    const tx = await IceNft.mint(receiver, tokenId, amount, data);
    await tx.wait();
    console.log('Minted', tx.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
