import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<><Head>
        	<title>Tala Marketplace</title>
      	</Head>
		<div>
			<nav className="border-b p-6 text-gold">
				<p className="text-4xl font-bold">Tala NFT Marketplace</p>
				<br></br>
				<p className="text-xs">Deployed on Ropsten Testnet <a href="https://faucet.dimensions.network/" target="_blank" rel="noopener noreferrer">[get test Ether]</a></p>
				<div className="flex mt-4 justify-center mr-auto">
					<Link href="/">
						<a className="mr-4">
							Marketplace
						</a>
					</Link>
					<Link href="/create-item">
						<a className="mr-6">
							Create Item
						</a>
					</Link>
					<Link href="/purchased-assets">
						<a className="mr-6">
							Purchased Assets
						</a>
					</Link>
					<Link href="/created-assets">
						<a className="mr-6">
							Created Assets
						</a>
					</Link>
				</div>
			</nav>
			<Component {...pageProps} />
		</div></>
	)
}

export default MyApp