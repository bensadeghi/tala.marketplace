const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("TalaMarket", function () {
	it("Should create and execute market sales", async function () {
		const [seller, buyer] = await ethers.getSigners();

		/* deploy the NFT contract */
		const NFT = await ethers.getContractFactory("TalaNFT");
		const nft = await NFT.deploy(seller.address);

		/* deploy the marketplace */
		const Market = await ethers.getContractFactory("TalaMarket");
		const market = await Market.deploy(nft.address);
		await market.deployed();
		
		let listingPrice = await market.listingPrice();
		listingPrice = listingPrice.toString();

		let auctionPrice = ethers.utils.parseUnits('9', 'ether');
		let itemId = 1;

        /* grant minter role to market contract */
		const minterRole = await nft.MINTER_ROLE();
		await nft.grantRole(minterRole, market.address);

		/* create a token and put it up for sale */
		let tokenURI = "https://www.mytokenlocation.com";
		tx = market.connect(seller).createMarketItem(tokenURI, auctionPrice, { value: listingPrice });
		await expect(tx).to.eventually.be.fulfilled;

		/* get buyer account balance */
        let buyerTokens = await nft.balanceOf(buyer.address);

		/* query for and return the unsold items = 1 */
		items = await market.fetchMarketItems();
		await expect(items.length).to.be.equal(1);

		/* execute sale of token to another user */
		tx = market.connect(buyer).createMarketSale(itemId, { value: auctionPrice });
		await expect(tx).to.eventually.be.fulfilled;

		/* query for and return the unsold items = 0 */
		items = await market.fetchMarketItems();
		await expect(items.length).to.be.equal(0);
		
		/* test sale: fetchMyNFTs and token balances */
		buyerItems = await market.connect(buyer).fetchMyNFTs();
		await expect(buyerItems.length).to.be.equal(1);

        await expect(nft.balanceOf(buyer.address)).to.eventually.be.equal(buyerTokens + 1);

		/* test re-sale */
		auctionPrice = ethers.utils.parseUnits('10', 'ether');
		nft.connect(buyer).setApprovalForAll(market.address, true);
		tx = market.connect(buyer).updateMarketItem(itemId, auctionPrice, { value: listingPrice });

		await expect(tx).to.eventually.be.fulfilled;
		return await expect(nft.balanceOf(buyer.address)).to.eventually.be.equal(0);

	})
})