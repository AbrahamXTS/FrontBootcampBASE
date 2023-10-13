import axios from "axios";

const baseURL = String(import.meta.env.VITE_API_URL);

export const clientsURL = baseURL + "/customer";
export const accountsURL = baseURL + "/account";
export const currenciesURL = baseURL + "/currency";

export const httpClient = axios.create({
	baseURL: baseURL,
});
