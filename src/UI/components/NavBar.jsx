import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { LuCross } from "react-icons/lu";
import { MenuItems } from "./MenuItems";
import { CreateQR } from "../../registeredFunctions/components/CreateQR";
import { Modal } from "./Modal";
import { CreateEditForm } from "../../registeredFunctions/components/CreateEditForm";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //manage "crear" button -open modal
  const [showModal, setShowModal] = useState(false);
  const openCloseModal = () => setShowModal(!showModal);
  //manage qr popup on creation
  const [newEntryId, setNewEntryId] = useState(null);
  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary text-3xl top-[3vw] right-[3vw] absolute"
        >
          <TiThMenuOutline />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary text-4xl top-[3vw] right-[3vw] absolute transform rotate-45 z-10"
        >
          <LuCross />
        </button>
      )}
      <div
        className={`fixed top-0 right-0 md:static bg-slate-50 w-[20vw] md:w-full   ${
          isOpen ? "translate-x-0 " : "translate-x-full md:translate-x-0"
        } ease-in-out duration-700 rounded-bl-full md:rounded-none

`}
      >
        <MenuItems openCloseModal={openCloseModal} />
      </div>
      <Modal
        show={showModal}
        close={openCloseModal}
        title={"Crear regalo"}
        children={
          <CreateEditForm close={openCloseModal} setID={setNewEntryId} />
        }
      />
      {newEntryId && (
        <CreateQR id={newEntryId} setID={setNewEntryId} msg={true} />
      )}
    </>
  );
};
