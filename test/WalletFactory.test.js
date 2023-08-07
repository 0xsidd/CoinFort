const { ethers } = require("hardhat");
describe("Smart wallet", async function () {
    let walletFac;
    let signer;
    beforeEach(async () => {
        signer = await ethers.getSigners();
        const WalletFactory = await ethers.getContractFactory("WalletFactory");
        walletFac = await WalletFactory.connect(signer[0]).deploy();
        await walletFac.deployed();
    });

    describe("SW-Test", async () => {
        it("should register user",async ()=>{
            const [owner] = await ethers.getSigners();
            await walletFac.registerUser("0x10170c1e37ec255406d976d84bcb9170f205d1c6e0f7f658902d42528291811d", "sid123");
        })
    });
});

