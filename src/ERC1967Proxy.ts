import { ponder } from "@/generated";
import { bytesToString, toBytes } from "viem";

ponder.on("ERC1967Proxy:Transfer", async ({ event, context }) => {
  const { Account, Fname } = context.entities;

  await Account.upsert({
    id: event.params.to,
  });

  await Fname.upsert({
    id: event.params.tokenId,
    create: {
      account: event.params.to,
      name: fnameFromTokenId(event.params.tokenId),
    },
    update: {
      account: event.params.to,
    },
  });
});

// Converts ERC-721 tokenId bigint into Fname string
export const fnameFromTokenId = (tokenId: bigint) => {
  return bytesToString(toBytes(tokenId)).replace(/\0/g, "");
};
