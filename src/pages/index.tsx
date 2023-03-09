// import {Menu} from "@/components/menu";
import {AddressBar} from "@/components/address/address-bar";

export default function Home() {
  return (
    <main>
      {/*<Menu/>*/}
      <div className="header">
        <h1>Welcome to the NFT app</h1>
        <p>Enter your wallet address or collection address to see the list of NFTs</p>
      </div>
      <div className="wrap">
        <AddressBar />
      </div>
    </main>
  )
}
