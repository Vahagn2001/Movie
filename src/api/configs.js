import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASEURL;
axios.defaults.headers.Authorization =import.meta.env.VITE_AUTHORIZATION