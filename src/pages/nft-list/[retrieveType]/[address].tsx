import {useEffect, useState} from "react";

import {NextPage} from "next";
import {useRouter} from "next/router";

import {GetAssetsByWallet} from "@/api/api";
import {DynamicKeyStringNumberPair} from "@/interfaces";
import {GridItem} from "@/components/grid-item";

const AssetsByAddress: NextPage = () => {
  const route = useRouter();
  const {address, retrieveType} = route.query;
  const [nfts, setNfts] = useState<DynamicKeyStringNumberPair[]>([]);

  useEffect( () => {
    const requestNfts = async () => {
      const data = await GetAssetsByWallet(address as string, retrieveType as string);
      setNfts(data);
    }

    requestNfts()
      .catch(console.error);
  }, [address, retrieveType])

  return (
    <main>
      <div className="header">
        <h1>NFT {retrieveType} by wallet address</h1>
      </div>
      <div className="list">
        {nfts ?
          nfts.map((nft) => {
            return <GridItem key={nft.id} name={nft.name as string} description={nft.description as string}
                             permalink={nft.permalink as string} image={nft.image_url as string}/>
          })
          : <p>No NFTs found in this ${retrieveType}</p>}
      </div>
    </main>
  )
}

export default AssetsByAddress