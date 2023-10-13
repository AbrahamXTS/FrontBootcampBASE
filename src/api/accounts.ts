import { useMutation, useQuery } from "@tanstack/react-query";

import { Account } from "../interfaces";
import { accountsURL, httpClient } from "./http";

const getAccountsByClientId = async (customerId: number) => {
	const { data } = await httpClient<Account[]>({
		method: "GET",
		url: accountsURL,
		params: { customerId },
	});

	return data;
};

export const useGetAccountsByClientId = (customerId: number) => {
	return useQuery({
		queryKey: ["accounts"],
		queryFn: () => getAccountsByClientId(customerId),
	});
};

export const useCreateAccount = () => {
	return useMutation({
		mutationFn: (customerId: number) =>
			httpClient<Account>({
				method: "POST",
				url: accountsURL,
				params: { customerId },
			}),
	});
};
