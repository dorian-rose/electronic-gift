import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { GiftDetailView } from "../../UI/components/GiftDetailView";
import { useState, useEffect } from "react";

export const DetailPage = () => {
  const { id } = useParams();

  //set variables for fetch and fetch url
  const url = `${import.meta.env.VITE_URL}/id/${id}`;
  const method = "GET";

  //fetch entry with id from params
  const { isLoading, entries } = useFetch(url, method);

  console.log("entries on page", entries, id);
  return (
    <div>
      <p>{entries?.msg}</p>
      <GiftDetailView {...entries.data} />
    </div>
  );
};
