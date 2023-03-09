import {useEffect, useState} from "react";

import {NextPage} from "next";
import {useRouter} from "next/router";

import {GetAssetsByWallet} from "@/api/api";
import {DynamicKeyStringNumberPair} from "@/interfaces";
import {GridItem} from "@/components/grid-item";
import {NftDetailsModal} from "@/components/modal";
import Link from "next/link";
import {Menu} from "@/components/menu";

const AssetsByAddress: NextPage = () => {
  const route = useRouter();
  const {address, retrieveType} = route.query;
  const [nfts, setNfts] = useState<DynamicKeyStringNumberPair[]>([]);


  useEffect(() => {
    const checkedAddress = address ? address : localStorage.getItem("address");
    console.log(address);
    const checkedType = retrieveType ? retrieveType : localStorage.getItem("retrieveType");
    const requestNfts = async () => {
      const data = await GetAssetsByWallet(checkedAddress as string, checkedType as string);
      setNfts(data);
    }

    requestNfts()
      .catch(console.error);
  }, [address, retrieveType])

  return (
    <main>
      <Menu />
      <div className="header">
        <h1>NFT {retrieveType} by wallet address</h1>
      </div>
      <>
        <div className="list">
          {nfts.length ?
            nfts.map((nft) => {
              return <GridItem key={nft.id} name={nft.name as string} description={nft.description as string}
                               permalink={nft.permalink as string} image={nft.image_url as string}/>
            })
            : <p>No {retrieveType} found in this wallet</p>}
        </div>

      </>
      <NftDetailsModal/>
    </main>
  )
}

export default AssetsByAddress