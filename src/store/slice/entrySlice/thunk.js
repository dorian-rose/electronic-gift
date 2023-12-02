import { setEntries, startLoadingEntries } from "./entrySlice"


export const getEntries = (url, method, body) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingEntries())

        //call fetch
        let data;
        let options = {};

        const newData = { ...body } //from body

        try {
            if (method == "DELETE" || method == "POST" || method == "PUT") {

                options = {
                    method: method,
                    body: JSON.stringify(newData),
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            }
            // if (method == "PUT" || method == "POST") {

            //     options = {
            //         method: method,
            //         body: body,
            //         headers: {
            //         "Content-type": "multipart/form-data",
            //        }
            //     }
            // }
            console.log("at fetch ", url, method)
            const response = await fetch(url, options);
            data = await response.json();
            console.log("ok", data.ok, "entries", data.data, "msg", data.msg)


        } catch (error) {
            console.log('FAILED while fetching', error)
            return error
        }

        dispatch(setEntries({ ok: data.ok, entries: data.data, msg: data.msg }))
    }


}