import { ethers } from 'ethers';

const connectWallet = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

      // Check if MetaMask is connected to the correct network
      const chainId = await provider.send('eth_chainId');
      if (chainId !== '0x14a33') {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x14a33' }] // Switch to chain ID 80001
        });

        // Wait for the network to be switched
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Re-check the chain ID
        const newChainId = await provider.send('eth_chainId');
        if (newChainId !== '0x14a33') {
          console.error('Failed to switch to the desired network (Chain ID 80001).');
          return null;
        }
      }

      // Prompt user for account connections
      await provider.send("eth_requestAccounts");
      const signer = provider.getSigner();
      return signer;
    } else {
      console.error('MetaMask not found.');
    }
  } catch (error) {
    console.error('Failed to connect to MetaMask:', error);
  }
};

export default connectWallet;