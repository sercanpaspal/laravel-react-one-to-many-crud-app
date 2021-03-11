import axios from "axios";

const API_URL = "/api";

axios.interceptors.response.use(
    function (response) {
        if (response.data) {
            return response.data;
        }

        return response;
    },
    function (error) {
        if (error.response) {
            return Promise.reject(error.response.data);
        } else if (error.request) {
            return Promise.reject(error.request);
        } else {
            return Promise.reject(error);
        }
    }
);

const post = (endpoint, data) => axios.post(API_URL + endpoint, data);

const put = (endpoint, data) => axios.put(API_URL + endpoint, data);

const get = (endpoint) => axios.get(API_URL + endpoint);

const del = (endpoint) => axios.delete(API_URL + endpoint);

const Person = {
    paginate: (page = 1) => get(`/person?page=${page}`),
    store: (data) => post(`/person`, data),
    edit: (id) => get(`/person/${id}/edit`),
    update: (id, data) => put(`/person/${id}`, data),
    destroy: (id) => del(`/person/${id}`),
};

const Address = {
    store: (data) => post(`/address`, data),
    update: (id, data) => put(`/address/${id}`, data),
    destroy: (id) => del(`/address/${id}`),
};

export default { Person, Address };
