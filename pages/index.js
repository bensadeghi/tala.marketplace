import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
	nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/TalaNFT.sol/TalaNFT.json'
import Market from '../artifacts/contracts/TalaMarket.sol/TalaMarket.json'

export default function Home() {
	const [nfts, setNfts] = useState([])
	const [loadingState, setLoadingState] = useState('not-loaded')
	useEffect(() => {
		loadNFTs()
	}, [])
	
	async function loadNFTs() {
		/* create a generic provider and query for unsold market items */
		const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161") // MetaMask key
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
		const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
		const data = await marketContract.fetchMarketItems()

		/*
		*  map over items returned from smart contract and format 
		*  them as well as fetch their token metadata
		*/
		const items = await Promise.all(data.map(async i => {
			const tokenUri = await tokenContract.tokenURI(i.itemId)
			const meta = await axios.get(tokenUri)
			let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
			let item = {
				price,
				itemId: i.itemId.toNumber(),
				seller: i.seller,
				owner: i.owner,
				image: meta.data.image,
				name: meta.data.name,
				description: meta.data.description,
				url: tokenUri,
			}
			return item
		}))
		setNfts(items)
		setLoadingState('loaded')
	}

	async function buyNft(nft) {
		/* needs the user to sign the transaction, so will use Web3Provider and sign it */
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(connection)
		const signer = provider.getSigner()
		const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

		/* user will be prompted to pay the asking proces to complete the transaction */
		const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
		const transaction = await contract.createMarketSale(nft.itemId, {
			value: price
		})
		await transaction.wait()
		loadNFTs()
	}

	if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl text-gold">No items in marketplace</h1>)
	return (
		<div>
			<h2 className="text-2xl py-2 text-gold text-center">Purchase NFTs</h2>
			<div className="flex items-center justify-center px-4" style={{ maxWidth: '1600px' }}>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
					{
						nfts.map((nft, i) => (
							<div key={i} className="border shadow rounded-xl overflow-hidden">
								<img src={nft.image} />
								<a className="text-gray-500 pl-4" target="_blank" rel="noreferrer" href={nft.url}>Meta on IPFS</a>
								<div className="p-4 pb-0">
									<p style={{ height: '64px' }} className="text-2xl font-semibold text-gray-100">{nft.name}</p>
									<div style={{ height: '70px', overflow: 'hidden' }}>
										<p className="text-gray-400">{nft.description}</p>
									</div>
								</div>
								<div className="p-4 pt-0 bg-black">
									<p className="text-2xl mb-4 text-gold">{nft.price} ETH</p>
									<button className="w-full bg-gold text-black font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Purchase</button>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}