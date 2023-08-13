import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    { name: "goerli", chainId: 5, rpcUrl: process.env.PONDER_RPC_URL_5 },
  ],
  contracts: [
    {
      name: "IdRegistry",
      network: "goerli",
      abi: "./abis/IdRegistry.json",
      address: "0xda107a1caf36d198b12c16c7b6a1d1c795978c42",
      startBlock: 7648795,
    },
    {
      name: "ERC1967Proxy",
      network: "goerli",
      abi: ["./abis/ERC1967Proxy.json", "./abis/NameRegistry_0xf73b.json"],
      address: "0xe3be01d99baa8db9905b33a3ca391238234b79d1",
      startBlock: 7648795,
    },
  ],
};
