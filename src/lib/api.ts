import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
});
