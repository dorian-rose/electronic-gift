import { useState } from "react";
import { Modal } from "../../UI/components/Modal";
import { CreateEditForm } from "../components/CreateEditForm";

export const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  //function to open or close modal
  const openCloseModal = () => setShowModal(!showModal);

  return (
    <div>
      DashboardPage
      <button className="block shadow w-fit mx-auto" onClick={openCloseModal}>
        Crear
      </button>
      <Modal
        show={showModal}
        close={openCloseModal}
        title={"Crear regalo"}
        children={<CreateEditForm />}
      />
    </div>
  );
};
