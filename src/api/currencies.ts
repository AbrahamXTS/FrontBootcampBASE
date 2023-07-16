import { useQuery } from "@tanstack/react-query";

import { Currency } from "../interfaces";
import { currenciesURL, httpClient } from "./http";

const getExchangeRates = async () => {
	const { data } = await httpClient<Currency[]>({
		method: "GET",
		url: currenciesURL,
	});

	return data;
};

export const useGetExchangeRates = () => {
	return useQuery({
		queryKey: ["customer"],
		queryFn: () => getExchangeRates(),
	});
};
