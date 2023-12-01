import { Link } from "react-router-dom";

export const GiftCard = (entry) => {
  return (
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
      <img className="w-full" src={entry.image} alt={entry.title} />
      <Link to={`view/${entry._id}`} className="block shadow w-fit mx-auto">
        View
      </Link>

      {/* <footer className="flex justify-between my-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        <div onClick={onComplete}>
          {task.completed ? (
            <button className="mx-4 text-green-500 text-xl p-1 shadow-xl rounded-full border ">
              <MdCheckCircle />
            </button>
          ) : (
            <button className="mx-4 text-green-500 text-xl p-1 shadow-xl rounded-full border ">
              <MdOutlineCircle />
            </button>
          )}
        </div>
        <div className="flex justify-around">
          <button
            onClick={onUpdate}
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
      </footer> */}
    </article>
  );
};
