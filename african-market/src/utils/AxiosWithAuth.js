import Axios from "axios";

// const baseUrl = add base URl Here? 

 export const AxiosWithAuth = () => {
     const token = localStorage.getItem("token");

    return Axios.create ({
        baseURL,
        headers: {
            Authorization: token,
        }
    });

export const axios = Axios.create({baseURl});
