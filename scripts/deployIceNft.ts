import { ethers } from "hardhat";

async function main() {
    const IceNftImpl = await ethers.deployContract("ICENFT");
    await IceNftImpl.waitForDeployment();

    // console.log(
    //     `IceImpl deployed to ${IceNftImpl.target}`
    // );

    const IceNft = await ethers.deployContract("ERC1967Proxy", [IceNftImpl.target, '0x8129fc1c']);
    await IceNft.waitForDeployment();

    console.log(
        `IceNft deployed to ${IceNft.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
