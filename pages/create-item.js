import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const ipfsClient = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
	nftaddress, nftmarketaddress
} from '../config'

import Market from '../artifacts/contracts/TalaMarket.sol/TalaMarket.json'

export default function CreateItem() {
	const [fileUrl, setFileUrl] = useState(null)
	const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
	const router = useRouter()

	async function onChange(e) {
		const file = e.target.files[0]
		try {
			const added = await ipfsClient.add(
				file,
				{
					progress: (prog) => console.log(`received: ${prog}`)
				}
			)
			const url = `https://ipfs.infura.io/ipfs/${added.path}`
			setFileUrl(url)
		} catch (error) {
			console.log('Error uploading file: ', error)
		}
	}

	async function createMarket() {
		const { name, description, price } = formInput
		if (!name || !description || (Number(price) != price) || !fileUrl) return
		/* first, upload to IPFS */
		const data = JSON.stringify({
			name, description, image: fileUrl
		})
		try {
			const added = await ipfsClient.add(data)
			const url = `https://ipfs.infura.io/ipfs/${added.path}`
			/* after file is uploaded to IPFS, pass the URL to save it on Polygon */
			createSale(url)
		} catch (error) {
			console.log('Error uploading file: ', error)
		}
	}

	async function createSale(url) {
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(connection)
		const signer = provider.getSigner()

		/* mint token and list item for sale on the marketplace */
		let contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
		
		let price = ethers.utils.parseUnits(formInput.price, 'ether')
		let listingPrice = await contract.listingPrice()
		listingPrice = listingPrice.toString()

		let transaction = await contract.createMarketItem(url, price, { value: listingPrice })
		await transaction.wait()
		router.push('/')
	}
	
	return (
		<div className="flex justify-center">
			<div className="w-1/2 flex flex-col pb-12">
			<h2 className="text-2xl py-2 text-gold text-center">Create an NFT</h2>
				<input
					placeholder="Asset Name"
					className="mt-8 border rounded p-4"
					onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
				/>
				<textarea
					placeholder="Asset Description"
					className="mt-2 border rounded p-4"
					onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
				/>
				<input
					placeholder="Asset Price in ETH"
					className="mt-2 border rounded p-4"
					onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
				/>
				<input
					type="file"
					name="Asset"
					className="my-4 text-gold"
					onChange={onChange}
				/>
				{
					fileUrl && (
						<img className="rounded mt-4" width="350" src={fileUrl} />
					)
				}
				<button onClick={createMarket} className="font-bold mt-4 bg-gold text-black rounded p-4 shadow-lg">
					Create NFT and List on Marketplace
				</button>
			</div>
		</div>
	)
}