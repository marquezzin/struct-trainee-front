import axios from "axios";

export const photo = axios.create({
    baseURL: "http://localhost:3000",
});