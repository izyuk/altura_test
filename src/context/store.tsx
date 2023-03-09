import {createContext, useState} from "react";
import {PortalAndContextProps} from "@/interfaces";

export const NFTContext = createContext(null);
export const ModalContext = createContext(null);

const NFTInitialState = {
  name: "",
  image: "",
  description: "",
  permalink: "",
}

function Context({children}: PortalAndContextProps) {
  const [data, setData] = useState(NFTInitialState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NFTContext.Provider value={{data, setData}}>
      <ModalContext.Provider value={{isOpen, setIsOpen}}>
        {children}
      </ModalContext.Provider>
    </NFTContext.Provider>
  );
}

export default Context;