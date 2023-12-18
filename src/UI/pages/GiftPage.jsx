import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { GiftDetailView } from "../../UI/components/GiftDetailView";

export const GiftPage = () => {
  const { id } = useParams();

  //set variables for fetch and fetch url
  const url = `${import.meta.env.VITE_URL}/id/${id}`;
  const method = "GET";
  //fetch entry with id from params
  const { isLoading, entries } = useFetch(url, method);
 

  //add isloading
  return (
    <div>
      {isLoading ? (
        <img
          className="h-20"
          src="https://i.gifer.com/ZKZg.gif"
          alt="loading gif"
        />
      ) : entries.ok ? (
        <GiftDetailView {...entries.data} />
      ) : (
        <p className="tracking-widest text-burgundy text-base font-light my-7">
          {error}
        </p>
      )}
    </div>
  );
};
