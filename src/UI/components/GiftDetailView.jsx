import { useNavigate, useLocation } from "react-router-dom";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { gifts } from "../../helpers/gifts";
import { useState } from "react";
import { Modal } from "./Modal";
import { CreateEditForm } from "../../registeredFunctions/components/CreateEditForm";

export const GiftDetailView = (entry) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { remove, obtain } = gifts();

  //function to open or close modal
  const openCloseModal = () => setShowModal(!showModal);

  const onDelete = async () => {
    console.log(entry, "id", entry._id);
    await remove(entry._id);
    obtain(entry.uid);
    navigate("/");
  };

  return (
    <>
      x
      <article className="relative justify-center bg-tertiary m-2  pb-12  shadow">
        <h2 className="h-8 overflow-hidden tracking-widest text-lg text-primary capitalize">
          {entry.title}
        </h2>

        <p
          // onClick={onOpen}
          className="h-14  overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2"
        >
          {entry.message}
        </p>
        <div>
          <img className="w-full" src={entry.image} alt={entry.title} />
        </div>

        <footer className="flex justify-between my-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          <div
            className={
              location.pathname == `/view/${entry._id}`
                ? "flex justify-around"
                : "hidden"
            }
          >
            <button
              onClick={openCloseModal}
              className="mx-4 text-primary text-xl p-1 shadow-xl rounded-full border "
            >
              <MdOutlineEditNote />
            </button>
            <button
              onClick={onDelete}
              className="mx-4 text-alert text-xl p-1 shadow-xl rounded-full border "
            >
              <MdDelete />
            </button>
          </div>
        </footer>
        <button
          // onClick={onUpdate}
          className={
            location.pathname == `/gift/${entry._id}`
              ? "mx-4 text-primary text-xl py-1 px-3 shadow-xl rounded-full border "
              : "hidden"
          }
        >
          Download
        </button>
      </article>
      <Modal
        show={showModal}
        close={openCloseModal}
        title={"Crear regalo"}
        children={<CreateEditForm close={openCloseModal} gift={entry} />}
      />
    </>
  );
};
