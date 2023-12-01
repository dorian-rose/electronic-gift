import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEntries } from "../../store/slice/entrySlice/thunk";
import { gifts } from "../../helpers/gifts";

export const CreateEditForm = ({ close, gift }) => {
  const { create, update, obtain } = gifts();
  const navigate = useNavigate();
  const uid = "12345abcde";

  //collect data from state - used to track progress
  //const { ok, isLoading, error } = useSelector((state) => state.products);

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "imagesArray",
  });

  const onSubmit = (data) => {
    const { title, message, imagesArray } = data;
    console.log("data", data);
    const images = imagesArray.map((obj) => obj.file[0]);
    console.log(images);

    //update, gift already exists
    if (gift) {
      update(gift, data);
    } else {
      //new gift
      const formData = new FormData();
      formData.append("title", title);
      formData.append("messsage", message);
      formData.append("images", images);
      // formData.append("image", image[0]);
      formData.append("uid", uid);
      formData.append("password", "1234Abcd");
      console.log(formData);
      create(formData, uid);
    }
    obtain(uid);
    reset();
    navigate("/");
    close();
  };
  return (
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
          "shadow-inner font-light pt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary",
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
      {/* <input
        {...register("image")}
        type="file"
        accept="jpg"
        multiple
        className="shadow-inner font-light mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
      /> */}
      <div>
        <label>Image Upload</label>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="file"
              {...register(`imagesArray.${index}.file`)}
              accept="image/*"
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ file: null })}>
          Add Image
        </button>
      </div>
      <button
        className="mt-8 w-10/12 m-auto block bg-primary text-tertiary shadow-md rounded-3xl px-4 py-2 focus:outline-none focus:border-primary hover:text-secondary hover:bg-tertiary hover:border hover:border-1  hover:border-secondary"
        type="submit"
      >
        {gift ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};
