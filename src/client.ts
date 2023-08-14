import { createPublicClient, http } from 'viem';
import { goerli } from 'viem/chains';

export const client = createPublicClient({ 
  chain: goerli,
  transport: http(process.env.PONDER_RPC_URL_5),
});
