* Frontend ```https://github.com/0xsidd/CoinFort```
* Backend ```https://github.com/0xsidd/CoinFort/tree/backend```
* smartCOntracts ```https://github.com/0xsidd/CoinFort/tree/smartContract```
* zk ```https://github.com/0xsidd/CoinFort/tree/circuit```
* Frontend ```https://github.com/0xsidd/CoinFort```
* Backend ```https://github.com/0xsidd/CoinFort/tree/backend```
* smartContracts ```https://github.com/0xsidd/CoinFort/tree/smartContract```
* zk ```https://github.com/0xsidd/CoinFort/tree/circuit```


# CoinFort

Coinfort is a secure Account-Abstracted, private-key less and zk smart contract wallet. 

Funds can be spent by a valid userid and password set by the user.

## Project Description
The main objective of this project is to simplify the process of bringing users into the web3 ecosystem.

### Challenges faced by Conventional Wallets: 
#### 1) Managing Private Keys:
Dealing with private keys is complex and problematic. 

#### 2) Dependency on Devices with Imported Private Keys:
Users often rely on specific devices with pre-loaded private keys. 

#### 3) Single Transaction Limitation: 
Traditional wallets can handle only one transaction at a time. 

**These issues make the process of onboarding new users quite challenging.**

To address these concerns and enhance the user experience, we ahave developed *Coinfort*.

Through Coinfort, users can effortlessly create their own secure wallets by choosing a username and password. This action triggers the deployment of a smart contract wallet, directly associated with the user's credentials on the blockchain. Users can then transfer funds into this wallet. Importantly, the wallet's ownership is linked to the user's chosen credentials, not an externally owned account (EOA).

When users intend to spend funds from their wallet, they only need to provide their username, password, and userOperations (generated on the frontend) and the transaction will be executed from the wallet contract.

Transactions can be initiated by any EOA, provided the input username and password are valid. Moreover, gas fees are refunded to the EOA account which initiates the transaction. 

An additional feature of Coinfort is its ability to facilitate transaction batching. This means that tasks such as airdropping tokens to a hundred users can be accomplished in a single transaction using Coinfort.

For users who don't have an established EOA, a paymaster service is available. This service can initiate and execute transactions on behalf of the user. At the conclusion of the transaction, the paymaster receives a refund for the gas fees from the user's wallet. This arrangement eliminates the need for users to possess an EOA every time they wish to spend funds.

The wallet's security is fortified by a ZK-Snarks verifier, ensuring protection against attacks such as front-running, sybil incidents, and manipulation of userOps.

----------------------------------------------------------

## Flow of the Wallet
Coinfort is natively deployed on Base-Goerli testnet and to grasp the intricacies of Coinfort's operations, let's delve into the journey of a new user who joins our platform.

####  USER REGISTRATION:
A user arrives at our platform and enters "cheems007" as their user ID and "IAMTHEDOGE" as their password. They proceed to click the "Register User" button on the frontend.

#### PASSWORD HASHING:
In the frontend, the Poseidon hash of the password is computed. For instance, if the hash of "IAMTHEDOGE" is calculated to be 0x10170c1e37ec255406d976d84bcb9170f205d1c6e0f7f658902d42528291811d.

#### USER WALLET DEPLOYMENT:
Subsequently, the frontend triggers the "registerUser(userId, hash)" function within the Factory.sol contract. This action deploys a new wallet contract from the Factory contract. The wallet's address is linked to the user's user ID and the hashed password.

#### WALLET CONTRACT FEATURES:
The freshly deployed wallet contract includes a multicall function. This function facilitates the execution of multiple transactions in a single instance. The wallet contract is "ownable," with the Factory contract being its sole owner. This ensures that only the Factory contract can access the wallet contract.

#### WALLET INFORMATION AND FUNDING: 
Once registered, users can locate their wallet address within the "Wallet Info" section and proceed to transfer funds into it.

#### INITIATING TRANSACTIONS:
When a user intends to spend funds from their registered wallet, they need to provide several parameters: userId, password hash, userOps, and zk-proof. Let's take a closer look at each of these parameters:

#### USERID AND PASSWORD:
These are the credentials with which the user registered on the platform.

#### USEROPS:
UserOps are encoded byte arrays that contain details about transactions (such as target address, amount of ether, and calldata). These details are decoded within the wallet contract. The execution of userOps occurs using the syntax `(target).call{value}(calldata)` in the wallet contract. Each specific action, like token swapping or transferring, is represented by a unique userOp. To streamline the process, the frontend groups userOps into batches. For instance, a token swap might involve two transaction actions: "approve" and "swap." The computation of gas fees for the transaction is carried out, and an additional userOp is added for gas refund.

#### ZK-PROOF (Zero-Knowledge Proof): 
Zk-Proof offers a method to verify information without revealing the actual data.

Generating a Zk-Proof involves three inputs: the hash of the password, the original password itself, and the sha256 hash of userOps.

Users enter its password. The hash of the password is calculated on the frontend. Both these parameters are passed in the Zk-Circuit. This step verifies if the hash of the actual password matches the provided hash. Additionally, the frontend calculates sha256(userOps), which is then utilized in the circuit to generate a Zk-Proof. This proof is employed for on-chain verification without disclosing the actual password.

The verification process consists of two conditions:

&nbsp;1. the verifier checks whether the user knows their password

&nbsp;2. it ensures that userOps have not been tampered with by a third party, confirming that the provided userOps remain consistent with the user's input.

#### PROOF VERIFICATION AND INTERACTION: 
Following proof generation, users can specify if they have an externally owned account (EOA) set up, such as MetaMask.

If MetaMask is utilized, it connects to the app. The Factory contract's `callWallet(proof, userId, hash, calldata[])` function is invoked. This function ensures the uniqueness of the proof and conducts proof verification using the imported Groth16 verifier.

Upon successful validation, the proof's hash is stored in a mapping to prevent reuse. Subsequently, the wallet contract address is retrieved from the mapping using the user's ID and hashed password. The wallet contract's multicall(calldata[]) is triggered, executing userOps and refunding gas fees to the transaction initiator.

If a *user hasn't set up an Externally Owned Account (EOA)* and decides to make use of the paymaster service, the transaction will be initiated by the sponsor. At the end of the transaction, the *sponsor will be reimbursed for the transaction fees* it had originally paid. 

Coinfort originated in making a case against a Web3 basher complaining about complex products. 

This way Coinfort eases your web3 spending of funds with only a userId and password.
