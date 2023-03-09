import {DynamicKeyStringPair} from "@/interfaces";

const API_URL = "https://api.opensea.io/api/v1";
const OPTIONS = {method: "GET", headers: {accept: "application/json"}};

const addressProviders: DynamicKeyStringPair = {
  assets: "assets?owner=",
  collections: "collections?asset_owner="
}

export const GetAssetsByWallet = async (address: string, retrieveType: string) => {
  let assetsData: any[] = [];
  await fetch(`${API_URL}/${addressProviders[retrieveType]}${address}`, OPTIONS)
    .then(res => {
      if(res.ok) return res.json()
      throw new Error("Something went wrong");
    })
    .then(resJson => {
      assetsData = retrieveType === "assets" ? [...resJson["assets"]] : [...resJson];
    })
    .catch(err => {
      console.error(err)
      assetsData = []
    })

  return assetsData
}