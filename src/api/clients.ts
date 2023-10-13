import { useMutation, useQuery } from "@tanstack/react-query";

import { clientsURL, httpClient } from "./http";
import { Client, ClientDTO } from "../interfaces";

const getClientById = async (clientId: number) => {
	const { data } = await httpClient<Client>({
		method: "GET",
		url: clientsURL + `/${clientId}`,
	});

	return data;
};

export const useGetClientById = (clientId: number) => {
	return useQuery({
		queryKey: ["customer"],
		queryFn: () => getClientById(clientId),
	});
};

export const useGetClients = () => {
	return useMutation({
		mutationFn: (name: string) =>
			httpClient<Client[]>({
				method: "GET",
				url: clientsURL,
				params: { name },
			}),
	});
};

export const useCreateClient = () => {
	return useMutation({
		mutationFn: (client: Omit<Client, "customerId">) =>
			httpClient.post<ClientDTO>(clientsURL, client),
	});
};
