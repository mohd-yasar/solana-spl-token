const { Connection, Keypair } = require('@solana/web3.js');
const { createMint } = require('@solana/spl-token');
const bs58 = require('bs58');

async function createToken() {
  // Connect to a Solana cluster
  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed'
  );

  // Your wallet private key
  const privateKey = '';
  // Your wallet's keypair
  const walletKeypair = Keypair.fromSecretKey(
    new Uint8Array(bs58.decode(privateKey))
  );

  // Create a new spl-token
  const mint = await createMint(
    connection,
    walletKeypair, // payer
    walletKeypair.publicKey, // mint authority
    walletKeypair.publicKey, // freeze authority
    9 // Decimals for the token
  );

  console.log('SPL Token created successfully!');
  console.log('Token Public Key:', mint.toBase58());
}

createToken();
