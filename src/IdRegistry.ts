import { ponder } from "@/generated";

ponder.on("IdRegistry:CancelRecovery", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("IdRegistry:ChangeHome", async ({ event, context }) => {
  console.log(event.params);
});
