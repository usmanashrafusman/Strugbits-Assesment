import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 500000,
});

const httpService = (api, data, params) => {
    return instance[api.method || "get"](api.url, { params, data })
        .then((response) => {
            return response;
        })
        .catch((error) => {
        });
};

export default httpService;