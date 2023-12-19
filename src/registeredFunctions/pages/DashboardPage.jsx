import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
// import { Modal } from "../../UI/components/Modal";
// import { CreateEditForm } from "../components/CreateEditForm";
import { getEntries } from "../../store/slice/entrySlice/thunk";
import { GiftCard } from "../components/GiftCard";
import { CreateQR } from "../components/CreateQR";

export const DashboardPage = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [newEntryId, setNewEntryId] = useState(null);

  const dispatch = useDispatch();

  //collect data from state
  const { ok, entries, isLoading, msg } = useSelector((state) => state.entries);

  //collect user id
  const { uid } = useSelector((state) => state.user);

  //set variables for fetch and fetch url
  const url = `${import.meta.env.VITE_URL}/user/${uid}`;
  const method = "GET";

  //function to open or close modal
  // const openCloseModal = () => setShowModal(!showModal);

  //dispatch to fetch
  useEffect(() => {
    console.log(url);
    dispatch(getEntries(url, method));
  }, []);

  return (
    <section className="absolute top-28  w-full">
      <h1 className="text-center text-4xl font-bold mb-6 text-primary">
        Regalos
      </h1>
      <h2 className="text-center text-xl mx-4 mb-6 text-primary">
        Ver y gestionar los regalos que has creado
      </h2>
      {/* <button
        className="m-auto block w-fit text-primary my-4 text-xl py-1 px-3 shadow-xl rounded-full border"
        onClick={openCloseModal}
      >
        Crear
      </button> */}
      {/* <Modal
        show={showModal}
        close={openCloseModal}
        title={"Crear regalo"}
        children={
          <CreateEditForm close={openCloseModal} setID={setNewEntryId} />
        }
      /> */}
      {/* {newEntryId && (
        <CreateQR id={newEntryId} setID={setNewEntryId} msg={true} />
      )} */}
      <div className=" mx-6 my-3 sm:my-10 flex flex-col sm:flex-row flex-wrap justify-center">
        {isLoading ? (
          <img
            className="h-20"
            src="https://i.gifer.com/ZKZg.gif"
            alt="loading gif"
          />
        ) : ok ? (
          entries.map((entry) => <GiftCard key={entry._id} {...entry} />)
        ) : (
          <p className="text-center racking-widest text-burgundy text-base font-light my-7">
            {msg}
          </p>
        )}
      </div>
    </section>
  );
};
