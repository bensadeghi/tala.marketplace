const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("TalaNFT", function () {
	it("Should create and transfer token", async function () {
		const [seller, buyer] = await ethers.getSigners();

		/* deploy the NFT contract */
		const NFT = await ethers.getContractFactory("TalaNFT");
		const nft = await NFT.deploy(seller.address);
		await nft.deployed();

        /* grant minter role to seller */
		const minterRole = await nft.MINTER_ROLE();
		await nft.grantRole(minterRole, seller.address);

		/* create token ID 1 */
		await nft.createToken("https://www.mytokenlocation.com");

		/* count ownership of tokens */
        let sellerTokens = await nft.balanceOf(seller.address);
        let buyerTokens = await nft.balanceOf(buyer.address);

		/* transfer token from seller to buyer accounts */
        tx = nft.transferFrom(seller.address, buyer.address, 1);

        await expect(tx).to.eventually.be.fulfilled;
        await expect(nft.balanceOf(seller.address)).to.eventually.be.equal(sellerTokens - 1);
        return await expect(nft.balanceOf(buyer.address)).to.eventually.be.equal(buyerTokens + 1);
	})
})