import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../UI/components/Modal";
import { CreateEditForm } from "../components/CreateEditForm";
import { getEntries } from "../../store/slice/entrySlice/thunk";
import { GiftCard } from "../components/GiftCard";

export const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateState, setUpdateState] = useState(false);
  const dispatch = useDispatch();
  const uid = "12345abcde";

  //collect data from state
  const { ok, entries, isLoading, error } = useSelector(
    (state) => state.entries
  );

  //set variables for fetch and fetch url
  const url = `${import.meta.env.VITE_URL}/user/${uid}`;
  const method = "GET";

  //dispatch to fetch
  useEffect(() => {
    dispatch(getEntries(url, method));
  }, [updateState]);

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
        children={<CreateEditForm close={openCloseModal} />}
      />
      <section className="mx-6 my-3 sm:my-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  lg:grid-cols-4">
        {isLoading ? (
          <img
            className="h-20"
            src="https://i.gifer.com/ZKZg.gif"
            alt="loading gif"
          />
        ) : ok ? (
          entries.map((entry) => <GiftCard key={entry._id} {...entry} />)
        ) : (
          <p className="tracking-widest text-burgundy text-base font-light my-7">
            {error}
          </p>
        )}
      </section>
    </div>
  );
};
