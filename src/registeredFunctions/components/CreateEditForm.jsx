import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getEntries } from "../../store/slice/entrySlice/thunk";
import { gifts } from "../../helpers/gifts";

export const CreateEditForm = ({ close, gift, setID }) => {
  const [images, setImages] = useState([]);
  const [imageNames, setImageNames] = useState([]);
  const [formattedFile, setFormattedFile] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const { create, update, obtain } = gifts();
  // const navigate = useNavigate();

  //collect user id
  const { uid } = useSelector((state) => state.user);

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    // control,
    formState: { errors },
  } = useForm();
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "imagesArray",
  // });

  const resetImages = () => {
    setImageNames([]);
    setImages([]);
  };

  //handle images  array
  const handleImage = (e) => {
    setImageNames((oldArray) => [...oldArray, e.target.files[0].name]);
    const files = Array.from(e.target.files);
    console.log("img", files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  // const handlePDF = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file[0]);
  //   reader.onloadend = () => {
  //     setFormattedFile(reader.result);
  //   };
  // };

  const handlePDF = async (file) => {
    try {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onloadend = () => {
          setFormattedFile(reader.result);
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    try {
      if (data.file) {
        data.file = await handlePDF(data.file);
      }

      //update, gift already exists
      if (gift) {
        update(gift, data);
      } else {
        //new gift
        const body = { ...data, images, uid, password: "11234546" };

        setIsloading(true);
        const newId = await create(body);
        setIsloading(false);
        console.log("new id", newId);
        setID(newId);
      }
      setImages([]);
      reset();
      obtain(uid);

      close();
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <>
      <form
        className="rounded-3xl p-2  w-full"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <input
          {...register("title", { required: "Título es requerido" })}
          type="text"
          defaultValue={gift ? gift.title : ""}
          placeholder={gift ? "" : "Ponle un título al regalo"}
          // className="font-light mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          className={`
          "shadow-inner  font-light mb-6 pt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary",
          ${errors.title && "focus:border-alert border-alert bg-red-100"}
        `}
        />
        <p className="font-thin italic text-alert px-20 text-sm">
          {errors.title?.message}
        </p>
        <textarea
          {...register("message")}
          defaultValue={gift ? gift.message : ""}
          placeholder="Escríbe un mensaje para el recipiente del regalo"
          className="shadow-inner font-light mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
        />
        <label
          htmlFor="image"
          className="relative top-5  left-12   bg-white px-2 text-gray-500 text-sm"
        >
          Sube fotos
        </label>
        <input
          onChange={handleImage}
          type="file"
          name="image"
          multiple
          className="shadow-inner font-light mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-3 focus:outline-none focus:border-primary "
        />
        <p>
          {imageNames.length > 0 && (
            <div className="flex flex-wrap justify-center content-center">
              {imageNames.map((imageName) => (
                <p className="me-2 self-center text-xs">{imageName}</p>
              ))}

              <button
                className="text-red-500 self-center shadow border px-1"
                onClick={resetImages}
              >
                x
              </button>
            </div>
          )}
        </p>
        <label
          htmlFor="file"
          className="relative top-5  left-12   bg-white px-2 text-gray-500 text-sm"
        >
          Adjunta un archivo PDF
        </label>
        <input
          type="file"
          {...register("file", { required: "Archivo es requerido" })}
          className="shadow-inner font-light mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-3 focus:outline-none focus:border-primary "
        />

        <button
          className="mt-8 w-10/12 m-auto block bg-primary text-tertiary shadow-md rounded-3xl px-4 py-2 focus:outline-none focus:border-primary hover:text-secondary hover:bg-tertiary hover:border hover:border-1  hover:border-secondary"
          type="submit"
        >
          {gift ? "Actualizar" : "Crear"}
        </button>
        {isLoading && (
          <img
            className="h-20 m-auto block mt-4"
            src="https://i.gifer.com/ZKZg.gif"
            alt="loading gif"
          />
        )}
      </form>
    </>
  );
};
