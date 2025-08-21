# TEA Testnet Airdrop bot
A CLI tool to interact with the Tea Sepolia Testnet. Easily manage TEA tokens, stake, claim rewards, and make transactions on the Tea blockchain.

## Requirements

- Node.js
- Private keys for the wallets you intend to use (stored in `privateKeys.json`).

# Main Menu
- Transfer TEA – Send TEA to random wallet addresses.
- Stake TEA – Stake your TEA to earn rewards.
- Claim Rewards – Get your earned staking rewards.
- Withdraw stTEA – Unstake and take back your TEA.
- Daily Task – Do 100 small transfers (0.0001 TEA) to stay active.
- Exit – Close the program.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/frankrichardhall/TEA-Testnet-Airdrop-bot.git
   cd TEA-Testnet-Airdrop-bot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create `privateKeys.json`**:
   Create a file named `privateKeys.json` in the root directory with the following format:

   ```json
   [
     "your_private_key_1",
     "your_private_key_2"
   ]
   ```

4. **Run the Bot**:

   ```bash
   npm start
   ```

## Usage

- Use `npm start` to check the menu options available.
- Choose the appropriate command based on the network you want to use.
- The bot will automatically execute the transactions, handling any errors and retrying as needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 