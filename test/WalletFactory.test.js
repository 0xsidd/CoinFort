const { ethers, waffle } = require("hardhat");
const { generateProof } = require("../proofGen/generateProof");
const abi = new ethers.utils.AbiCoder;
let provider = waffle.provider;
describe("Smart wallet", async function () {
    let walletFac;
    let signer;

    const getLowLevelCalldata = async (address, value) => {
        let opData = abi.encode(["address", "uint256", "bytes"], [address, value.toString(), 0x00]);
        return opData
    }

    const splitString = (inputString)=> {
        const halfLength = Math.ceil(inputString.length / 2);
        const firstPart = '0x' + inputString.slice(2, halfLength + 1);
        const secondPart = '0x' + inputString.slice(halfLength + 1);
      
        return [firstPart, secondPart];
      }


    const getHashFromCalldata = (calldata) => {
        const params = abi.encode(
            ["bytes[]","uint256"],
            [calldata,31337]
        );

        return (ethers.utils.keccak256(params))

    }

    beforeEach(async () => {
        signer = await ethers.getSigners();
        const WalletFactory = await ethers.getContractFactory("WalletFactory");
        walletFac = await WalletFactory.connect(signer[0]).deploy();
        await walletFac.deployed();
    });

    describe("SW-Test", async () => {
        it("should increment counter with calldata", async () => {
            const [owner] = await ethers.getSigners();
            console.log(owner.address);

            let proof = await generateProof("sid123", "1390849295786071768276380950238675083608645509734", 1);
            proof = proof.jsonCalldata;
            console.log(proof);
            await walletFac.registerUser("0x10170c1e37ec255406d976d84bcb9170f205d1c6e0f7f658902d42528291811d", "sid123");
            // // console.log(await walletFac.usernameToWalletAddress("sid123"));
            const transactionHash = await owner.sendTransaction({
                to: await walletFac.usernameToWalletAddress("sid123"),
                value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ether
            });
            let callData = await getLowLevelCalldata("0xC98E540e1E50C00390bA0DA25654726e9E55e4eE", "100")
            // console.log(callData);
            await walletFac.connect(owner)
                .callWallet(proof[0], proof[1], proof[2], proof[3], "sid123", [callData]);
        });

        it.only("should  verify proof and do transaction", async () => {
            const [owner] = await ethers.getSigners();
            await walletFac.registerUser("0x10170c1e37ec255406d976d84bcb9170f205d1c6e0f7f658902d42528291811d", "sid123");
            let cd1 = await getLowLevelCalldata("0xC98E540e1E50C00390bA0DA25654726e9E55e4eE", "100");
            let cd2 = await getLowLevelCalldata("0xC98E540e1E50C00390bA0DA25654726e9E55e4eE", "100");
            let callData = [cd1, cd2];
            let callHash = getHashFromCalldata(callData);
            // console.log("callHash", callHash);
            let resHash = splitString(callHash)
            console.log(resHash);
            // let splitCalldata = splitStringIntoEqualParts(callHash);
            // console.log("sd1",splitCalldata[0]);
            // console.log("sd2",splitCalldata[1]);

            let proof = await generateProof("sid123","267857201382109926770180011731093983294","192836719161962028538483233765671814712");
            proof = proof.jsonCalldata;
            console.log(proof);
            await owner.sendTransaction({
                to: await walletFac.usernameToWalletAddress("sid123"),
                value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ether
            });
            let txn = await walletFac.callWallet(proof[0], proof[1], proof[2], proof[3], "sid123", callData);
            console.log(await txn.wait());

            // let res = await walletFac.hashAndSplitCalldata(callData)
            // console.log("-----------------------------------------------");
            // console.log(res);

        })
    });
});

