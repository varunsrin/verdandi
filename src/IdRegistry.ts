import { ponder } from "@/generated";

ponder.on("IdRegistry:Register", async ({ event, context }) => {
  const { Account, Fid } = context.entities;

  await Account.upsert({
    id: event.params.to,
    create: { fid: event.params.id },
    update: { fid: event.params.id },
  });

  await Fid.upsert({
    id: event.params.id,
    create: { account: event.params.to },
    update: { account: event.params.to },
  });
});

ponder.on("IdRegistry:Transfer", async ({ event, context }) => {
  const { Account, Fid } = context.entities;

  await Account.upsert({
    id: event.params.to,
    create: { fid: event.params.id },
    update: { fid: event.params.id },
  });

  await Fid.upsert({
    id: event.params.id,
    create: { account: event.params.to },
    update: { account: event.params.to },
  });
});
