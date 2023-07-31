import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    networks: {
        ecfx_testnet: {
            url: "https://testnet.ecfxtrader.com/rpc",
        },
        ecfx: {
            url: "https://testnet.ecfxtrader.com/rpc",
        }
    }
};

export default config;
