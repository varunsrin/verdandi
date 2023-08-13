import { ponder } from "@/generated";

ponder.on("IdRegistry:Register", async ({ event, context }) => {
  const { User } = context.entities;
 
  const user = await User.create({
    id: event.params.id,
    data: {
      address: event.params.to,
    },
  });
});


ponder.on("IdRegistry:Transfer", async ({ event, context }) => {
  const { User } = context.entities;
 
  const user = await User.update({
    id: event.params.id,
    data: {
      address: event.params.to,
    },
  });
});
