import { ponder } from "@/generated";
import { bytesToString, parseAbi, toBytes } from "viem";
import { client } from "./client";

const abi = parseAbi(['function idOf(address) view returns (uint256)']);
const address = '0xda107a1caf36d198b12c16c7b6a1d1c795978c42';

ponder.on("ERC1967Proxy:Transfer", async ({ event, context }) => {
  const { Fname } = context.entities;

  const fid = await client.readContract({
    abi,
    address,
    functionName: 'idOf',
    args: [event.params.to],
    blockNumber: event.block.number,
  });
 
  const fname = await Fname.upsert({
    id: event.params.tokenId,
    create: {
      address: event.params.to,
      fname: fnameFromTokenId(event.params.tokenId),
      fid,
    },
    update: {
      address: event.params.to,
    },
  });
});


// Converts ERC-721 tokenId bigint into Fname string
export const fnameFromTokenId = (tokenId: bigint) => {
  return bytesToString(toBytes(tokenId)).replace(/\0/g, '');
};
