import { ponder } from "@/generated";

ponder.on("IdRegistry:Register", async ({ event, context }) => {
  const { Account, Fid } = context.entities;

  await Account.upsert({
    id: event.params.to,
  });

  await Fid.create({
    id: event.params.id,
    data: {
      account: event.params.to,
    },
  });
});

ponder.on("IdRegistry:Transfer", async ({ event, context }) => {
  const { Account, Fid } = context.entities;

  await Account.upsert({
    id: event.params.to,
  });

  await Fid.update({
    id: event.params.id,
    data: {
      account: event.params.to,
    },
  });
});
