import {useState} from "react";

import {Select} from "@/components/select/select";
import {Input} from "@/components/input";
import {Button} from "@/components/button";

export const AddressBar = () => {
  /**
   * In general to persist data we can use redux-persist storage. But it requires a lot of additional dependencies
   * In our case localStorage is not so fancy way to do it, but it's just much simple solution.
  * */
  let prevUsedOption;
  if (typeof window !== "undefined") {
    prevUsedOption = localStorage.getItem("retrieveType") || "assets";
    localStorage.setItem("retrieveType", "assets")
  }

  const [retrieveType, setRetrieveType] = useState<string>(prevUsedOption as string);
  const [address, setAddress] = useState<string>();


  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    localStorage.setItem("retrieveType", value);
    setRetrieveType(value);

  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value;
    localStorage.setItem("address", address);
    setAddress(address);
  };

  return (
      <div className="bar">
        <Select cb={selectChange} initial={prevUsedOption as string}/>
        <Input cb={inputHandler}/>
        <Button link={`/nft-list/${retrieveType}/${address}`}/>
      </div>
  )
}