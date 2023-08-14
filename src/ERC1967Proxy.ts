import { ponder } from "@/generated";
import { bytesToString, toBytes } from "viem";

ponder.on("ERC1967Proxy:Transfer", async ({ event, context }) => {
  const { Fname } = context.entities;
 
  const fname = await Fname.upsert({
    id: event.params.tokenId,
    create: {
      address: event.params.to,
      fname: fnameFromTokenId(event.params.tokenId),
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
