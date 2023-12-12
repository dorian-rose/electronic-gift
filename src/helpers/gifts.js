import { useDispatch, useSelector } from "react-redux";
import { getEntries } from "../store/slice/entrySlice/thunk";
import { dataFetch } from "./fetch"



export const gifts = () => {

    const dispatch = useDispatch();

    const obtain = (uid) => {

        const url = `${import.meta.env.VITE_URL}/user/${uid}`;
        const method = "GET";
        dispatch(getEntries(url, method));
    };


    const create = async (data) => {

        const url = import.meta.env.VITE_URL;
        const method = "POST";
        // const body = { ...data, uid, password: "1234Abcd" };
        const newEntry = await dataFetch(url, method, data);
        console.log("new entry", newEntry, "id", newEntry._id)
        return newEntry.data._id
    };

    const remove = async (id) => {
        console.log("in remove")
        const url = import.meta.env.VITE_URL;
        const method = "DELETE";
        const body = { _id: id };
        await dataFetch(url, method, body);

    };

    const update = async (gift, newData) => {

        const url = import.meta.env.VITE_URL;
        const method = "PUT";
        const body = {
            ...gift,
            title: newData.title,
            message: newData.message,
        };
        await dataFetch(url, method, body);
    };


    return { create, update, obtain, remove }
}





