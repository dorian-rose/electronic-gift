
/**
 * 
 * @param {String} url url for fetch. Data retrieved by fetch (e.g. which fetch is made) will depend on this url.
 * @param {String} method 
 * @param {Object} [body] data for PUT, POST and DELETE requests 
 * @returns Object -data and or ok value in case of success, or error
 */
export const dataFetch = async (url, method, body) => {

    let data;

    let options = {};

    const newData = { ...body } //from body
    console.log("in fetch", newData)
    try {
        if (method == "DELETE") {

            options = {
                method: method,
                body: JSON.stringify(newData),
                headers: {
                    "Content-type": "application/json",

                }
            }
        }
        if (method == "POST" || method == "PUT") {

            options = {
                method: method,
                body: body,//JSON.stringify(newData),
                // headers: {
                //     //"Content-type": "application/json",
                //     "Content-type": "multipart/form-data",
                // }
            }
        }

        const response = await fetch(url, options);

        data = await response.json();


    } catch (error) {
        console.log('FAILED while fetching', error)
        return error
    }
    return data
}


