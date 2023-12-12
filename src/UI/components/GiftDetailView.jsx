import { MdDelete, MdOutlineEditNote, MdOutlineUndo } from "react-icons/md";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { gifts } from "../../helpers/gifts";
import { useState } from "react";
import { Modal } from "./Modal";
import { CreateEditForm } from "../../registeredFunctions/components/CreateEditForm";
import { DownloadFile } from "./DownloadFile";
import { Slider } from "./Slider";
import { PdfComp } from "./PdfComp";

export const GiftDetailView = (entry) => {
  const [showModal, setShowModal] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { remove, obtain } = gifts();

  //function to open or close modal
  const openCloseModal = () => setShowModal(!showModal);
  const changeDisplayPdf = () => setShowPdf(!showPdf);

  const onDelete = async () => {
    console.log(entry, "id", entry._id);
    await remove(entry._id);
    obtain(entry.uid);
    navigate("/");
  };

  return (
    <>
      <section className="justify-center bg-tertiary  m-4  pb-20  shadow-2xl">
        <h1 className="text-center pb-5 pt-10 underline tracking-widest text-2xl text-primary capitalize">
          {entry.title}
        </h1>
        {/* grid container  */}
        <div className="flex flex-col sm:flex-row ">
          {entry.images && entry.images.length > 0 ? (
            // first grid
            <div className="flex-1  sm:p-4  m-auto ">
              <Slider imagesArray={entry.images} />
            </div>
          ) : (
            <p>No images available.</p>
          )}
          {/* second grid box */}
          <article className="w-full flex-1 sm:p-4">
            <div className="bg-slate-50 w-full h-full px-2  pb-5 sm:pb-0">
              <div className="relative top-1/2 sm:-translate-y-1/2 left-1/2 -translate-x-1/2  bg-white rounded-xl w-fit p-3">
                <p className=" text-center">{entry.message}</p>
              </div>
            </div>
          </article>
        </div>
        {!showPdf ? (
          <button
            className="relative left-1/2 -translate-x-1/2 text-primary my-3 text-xl py-1 px-3 shadow-xl rounded-full border "
            onClick={changeDisplayPdf}
          >
            {location.pathname ==
            `https://teregalo.netlify.app/view/${entry._id}`
              ? "Ver PDF"
              : "Revelar tu regalo..."}
          </button>
        ) : (
          <DownloadFile url={entry.file} />
        )}
        <div className={`${!showPdf && "hidden"} `}>
          <PdfComp url={entry.file} />
          <button
            className="relative left-1/2 -translate-x-1/2 text-primary my-3 text-xl py-1 px-3 shadow-xl rounded-full border "
            onClick={changeDisplayPdf}
          >
            Esconder PDF
          </button>
        </div>
        <footer className="   w-full">
          <div
            className={
              location.pathname ==
              `https://teregalo.netlify.app/view/${entry._id}`
                ? "flex justify-center shadow px-3 py-1  rounded relative left-1/2 -translate-x-1/2"
                : "hidden"
            }
          >
            <button
              onClick={openCloseModal}
              className="mx-4  text-primary text-2xl p-1 shadow-xl rounded-full border "
            >
              <MdOutlineEditNote />
            </button>
            <button
              onClick={onDelete}
              className="mx-4 text-red-700 text-xl p-1 shadow-xl rounded-full border "
            >
              <MdDelete />
            </button>
            <Link
              to="/"
              className="mx-4 text-primary text-xl p-1 shadow-xl rounded-full border "
            >
              <MdOutlineUndo />
            </Link>
          </div>
        </footer>
      </section>
      <Modal
        show={showModal}
        close={openCloseModal}
        title={"Crear regalo"}
        children={<CreateEditForm close={openCloseModal} gift={entry} />}
      />
    </>
  );
};
