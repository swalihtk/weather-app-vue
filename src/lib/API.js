import axios from "axios";

const api = new axios.Axios({
    baseURL: "https://api.ambeedata.com/",
    headers: {
        "x-api-key": "17c221e28612dae85d7e12b3e6b8e53849d1ef627e55da62b182e0f12ea527eb"
    }
})

export default api;