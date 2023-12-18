import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Slider } from "../../UI/components/Slider";

export const GiftCard = (entry) => {
  return (
    <article className=" relative justify-center bg-slate-50 mx-4 max-w-xs shadow m-auto mb-3 sm:mb-0">
      <h2 className="text-center py-2 underline tracking-widest text-2xl text-primary capitalize">
        {entry.title}
      </h2>

      <p className="text-center pb-2">{entry.message}</p>
      <div>
        <div className="w-3/4 m-auto">
          <Slider imagesArray={entry.images} />
        </div>
      </div>

      <Link
        to={`view/${entry._id}`}
        className="m-auto block w-fit text-primary my-4 text-xl py-1 px-3 shadow-xl rounded-full border"
      >
        <FaMagnifyingGlass />
      </Link>
    </article>
  );
};
