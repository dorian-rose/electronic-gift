import { useForm } from "react-hook-form";

export const CreateEditForm = (props) => {
  const { close, gift } = props;

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (gift) {
      const newData = {
        ...gift,
        title: data.title,
        message: data.message,
      };
      console.log("edit gift", newData);
      //logic here
    } else {
      console.log("new gift", newData);
      //logic here
    }
    reset();
    close();
  };
  return (
    <form
      className="rounded-3xl p-2 "
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

      <button
        className="mt-8 w-10/12 m-auto block bg-primary text-tertiary shadow-md rounded-3xl px-4 py-2 focus:outline-none focus:border-primary hover:text-secondary hover:bg-tertiary hover:border hover:border-1  hover:border-secondary"
        type="submit"
      >
        {gift ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};
