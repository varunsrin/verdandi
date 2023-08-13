import { ponder } from "@/generated";

ponder.on("ERC1967Proxy:Transfer", async ({ event, context }) => {
  const { Username } = context.entities;
 
  const user = await Username.upsert({
    id: event.params.tokenId,
    create: {
      address: event.params.to,
    },
    update: {
      address: event.params.to,
    },
  });
});
