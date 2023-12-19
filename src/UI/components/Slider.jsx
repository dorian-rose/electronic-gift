import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const Slider = ({ imagesArray }) => {
  const [current, setCurrent] = useState(0);

  const images = imagesArray.map(({ url }) => url);

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <article className="bg-slate-100  py-1 relative">
      <div
        className={`${
          location.pathname == "/" && "sm:h-60"
        } overflow-hidden relative m-8 `}
      >
        <div
          className="flex transition ease-out duration-40"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img) => {
            return (
              <img
                className="rounded-xl border border-primary border-2 self-center"
                key={img}
                src={img}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute top-0 h-full w-full justify-between item-center flex text-primary text-xl px-1.5">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="absolute bottom-0 py-3 flex justify-center gap-3 w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                i == current ? "bg-white" : "bg-primary"
              }`}
            ></div>
          );
        })}
      </div>
    </article>
  );
};
