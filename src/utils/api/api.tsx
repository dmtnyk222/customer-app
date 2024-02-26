import axios from "axios";
import { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://proxy.cors.sh/' + 'https://api.p-rd.com/Fuse2_RestAPI/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['x-cors-api-key'] = 'temp_368b76b526936e794eb3e109cc7fb026';
axios.defaults.headers.common['Origin'] = 'https://customer-app-neon.vercel.app/'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Referer'] = '';
axios.defaults.withCredentials = true;

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