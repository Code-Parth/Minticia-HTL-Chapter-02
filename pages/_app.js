import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

/**
 * The chain ID 4 represents the Rinkeby Test Etherum network
 * The chain ID 5 represents the Goerli Test network
 * The chain ID 80001 represents the Polygon Test Matic network
 * The chain ID 11155111 represents the Sepolia Test network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [4, 5, 80001, 11155111]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
