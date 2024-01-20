import { Transaction, SystemProgram, Connection, PublicKey } from '@solana/web3.js';

interface pbk extends PublicKey{
  pubkey?: unknown;
}

/**
 * Creates an arbitrary transfer transaction
 * @param   {String}      publicKey  a public key
 * @param   {Connection}  connection an RPC connection
 * @returns {Transaction}            a transaction
 */
const createTransferTransaction = async (publicKey: pbk, connection: Connection): Promise<Transaction> => {
  const pubKey = new PublicKey(publicKey.pubkey)
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: pubKey,
      toPubkey: pubKey,
      lamports: 100,
    })
  );
  transaction.feePayer = pubKey;

  const anyTransaction: any = transaction;
  anyTransaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

  return transaction;
};

export default createTransferTransaction;
