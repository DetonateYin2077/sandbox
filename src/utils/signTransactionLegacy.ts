import { Transaction, VersionedTransaction } from '@solana/web3.js';

import { PhantomProvider } from '../types';

/**
 * Signs a transaction
 * @param   {PhantomProvider} provider    a Phantom Provider
 * @param   {Transaction | VersionedTransaction}     transaction a transaction to sign
 * @returns {Transaction | VersionedTransaction}                 a signed transaction
 */
const signTransactionLegacy = async (
  provider: PhantomProvider,
  transaction: Transaction | VersionedTransaction
): Promise<any> => {
  try {
    const signedTransaction = await provider.signTransaction(transaction);
    return signedTransaction;
  } catch (error) {
    console.warn(error);
    throw new Error(error.message);
  }
};

export default signTransactionLegacy;
