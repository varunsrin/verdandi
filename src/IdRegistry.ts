import { ponder } from "@/generated";

ponder.on("IdRegistry:Register", async ({ event, context }) => {
  const { Fid } = context.entities;
 
  const fid = await Fid.create({
    id: event.params.id,
    data: {
      address: event.params.to,
    },
  });
});


ponder.on("IdRegistry:Transfer", async ({ event, context }) => {
  const { Fid } = context.entities;
 
  const fid = await Fid.update({
    id: event.params.id,
    data: {
      address: event.params.to,
    },
  });
});
