import Image from "next/image";

import {IGridItem} from "@/interfaces";
import {useContext} from "react";
import {NFTContext, ModalContext} from "@/context/store";

export const GridItem = ({name, image, description, permalink}: IGridItem): JSX.Element => {

  const {setData} = useContext(NFTContext);
  const {isOpen, setIsOpen} = useContext(ModalContext);

  const handleNftOpen = () => {
    setData({
      name: name,
      image: image,
      description: description || "",
      permalink: permalink
    });
    setIsOpen(true);
  }

  return (
    <div className="item" onClick={handleNftOpen}>
      <Image src={image} alt={name} width={300} height={300}/>
      <div className="body">
        <p className="name">{name}</p>
        {description && <p className="truncate">{description}</p>}
        <button className="details">See details</button>
      </div>
    </div>
  )
}