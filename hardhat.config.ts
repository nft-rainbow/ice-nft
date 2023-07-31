import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const { PRIVATE_KEY } = process.env;

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
