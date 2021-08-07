const hre = require("hardhat");

async function main() {
	const deployer = await ethers.getSigner();

	const NFT = await hre.ethers.getContractFactory("TalaNFT");
	const nft = await NFT.deploy(deployer.address);
	await nft.deployed();
	console.log("nft deployed to:", nft.address);
	
	const NFTMarket = await hre.ethers.getContractFactory("TalaMarket");
	const nftMarket = await NFTMarket.deploy(nft.address);
	await nftMarket.deployed();
	console.log("nftMarket deployed to:", nftMarket.address);

	const minterRole = await nft.MINTER_ROLE();
    await nft.grantRole(minterRole, nftMarket.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
