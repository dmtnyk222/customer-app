import axios from "axios";
import { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://api.p-rd.com/Fuse2_RestAPI/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['x-cors-api-key'] = 'temp_03b43894fcae11b27ce3052e4ede4a61';
// axios.defaults.withCredentials = true;

const API = {
    getApiToken: (): Promise<AxiosResponse> => {
        return new Promise((reject) => {
            axios.post('/GetToken', {
                username: 'api.Fuse2@p-rd.com',
                grant_type: 'password',
                password: 'Clarifying2358*2681' 
            })
            .then(response => {
                axios.defaults.headers.common['Authorization'] = `${response.data?.access_token}`;
            })
            .catch(error => reject(error))
        })
    },
    getRateSchemes: (): Promise<AxiosResponse> => {
        return new Promise((resolve, reject) => {
            axios.post('/GetRateSchemes', {
                RateScheme: '',
                Description: '',
            })
            .then(response => {
                resolve(response)
            })
            .catch(error => reject(error))
        })
    }
}

export default API;