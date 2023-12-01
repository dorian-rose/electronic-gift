export const Modal = (props) => {
  const { show, close, title, children } = props;

  return (
    <div
      className={`${
        show ? "fixed z-40 bg-white" : "hidden"
      }   left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  w-10/12 sm:w-8/12 md:w-1/2`}
    >
      <button
        className="absolute right-5 top-4 bg-burgundy text-xs text-white px-1 rounded"
        onClick={close}
      >
        X
      </button>

      <article className="bg-tertiary  m-2 border border-primary shadow-lg rounded-xl z-20 pb-4  ">
        <h2 className="capitalize mt-7 mb-4 text-primary text-lg text-center sm:text-xl">
          {title}
        </h2>
        <div className="font-light bg-white w-10/12 m-auto mb-5 py-3 px-4 block border border-1 rounded-3xl focus:outline-none focus:border-primary ">
          {children}
        </div>
      </article>
    </div>
  );
};
