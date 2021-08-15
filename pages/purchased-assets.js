import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
	nftmarketaddress, nftaddress
} from '../config'

import NFT from '../artifacts/contracts/TalaNFT.sol/TalaNFT.json'
import Market from '../artifacts/contracts/TalaMarket.sol/TalaMarket.json'

export default function MyAssets() {
	const [nfts, setNfts] = useState([])
	const [formInput, updateFormInput] = useState({ price: ''})
	const [loadingState, setLoadingState] = useState('not-loaded')
	useEffect(() => {
		loadNFTs()
	}, [])

	async function loadNFTs() {
		const web3Modal = new Web3Modal({
			network: "mainnet",
			cacheProvider: true,
		})
		const connection = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(connection)
		const signer = provider.getSigner()

		const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
		const data = await marketContract.fetchMyNFTs()

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
			}
			return item
		}))
		setNfts(items)
		setLoadingState('loaded')
	}

	async function relistNft(nft) {
		let price = formInput.price
		if (Number(price) != price || Number(price) <= 0) return
		price = ethers.utils.parseUnits(price, 'ether')		

		/* needs the user to sign the transaction, so will use Web3Provider and sign it */
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(connection)
		const signer = provider.getSigner()
		const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
		let listingPrice = await marketContract.listingPrice()

		/* user will be prompted to pay the asking process to complete the transaction */
		let transaction = await tokenContract.connect(signer).setApprovalForAll(nftmarketaddress, true)
		await transaction.wait()
		transaction = await marketContract.updateMarketItem(nft.itemId, price, {
			value: listingPrice
		})
		await transaction.wait()
		loadNFTs()
	}

	if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl text-gold  text-center">No assets purchased</h1>)
	return (
		<div>
		<h2 className="text-2xl py-2 text-gold text-center">Items Purchased</h2>
			<div className="p-4 flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
					{
						nfts.map((nft, i) => (
							<div key={i} className="border shadow rounded-xl overflow-hidden">
								<img src={nft.image} className="rounded" />
								<div className="p-4 bg-black">
									<p className="text-2xl text-white pb-2">Bought for {nft.price} ETH</p>
									<input
										placeholder="Asset Price in ETH"
										className="w-full border rounded p-2"
										onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
									/>
									<button className="w-full bg-gold text-black font-bold py-2 px-12 rounded" onClick={() => relistNft(nft)}>Re-list for Sale</button>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}