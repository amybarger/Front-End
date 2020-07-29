import Axios from "axios";

const baseURL = "https://build-week-app.herokuapp.com/"

 export const AxiosWithAuth = () => {
     const token = localStorage.getItem("token");

    return Axios.create ({
        baseURL,
        headers: {
            Authorization: token,
        }
    });

};
