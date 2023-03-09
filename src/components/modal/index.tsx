import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

import {useContext, useEffect, useState} from "react";
import {NFTContext, ModalContext} from "@/context/store";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    padding: 0
  },
};

Modal.setAppElement("#modal");

export const NftDetailsModal = () => {
  const { data } = useContext(NFTContext);
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const [isModalOpen, setModalState] = useState(isOpen);

  // @ts-ignore
  const closeModal = () => {
    setModalState(false);
    setIsOpen(false);
  }

  const switchModalState = () => {
    setModalState(isOpen);
  }

  useEffect(() => {
    switchModalState()
  }, [isOpen, switchModalState])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
    <div className="modal">
      <div className="item">
      <button className="close" onClick={closeModal}>&times;</button>
        <Image src={data.image} alt={data.name} width={300} height={300}/>
        <div className="body">
          <p className="name">{data.name}</p>
          {data.description ? <p>{data.description}</p> : <p>No description available : </p> }
          <Link legacyBehavior href={data.permalink}>
            <a className="link">Go to OpenSea</a>
          </Link>
        </div>
      </div>
    </div>
    </Modal>
  )
}