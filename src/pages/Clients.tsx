import { useEffect, useState } from "react";
import { IconUser } from "@tabler/icons-react";

import { useGetClients } from "../api";
import { Client as IClient } from "../interfaces";
import { Client, SearchInput, Spinner } from "../components";

export const Clients = () => {
	const [search, setSearch] = useState("");
	const [clients, setClients] = useState<IClient[]>([]);
	const { mutate, isError, isLoading } = useGetClients();

	useEffect(() => {
		mutate(search, {
			onSuccess({ data }) {
				setClients(data);
			},
		});
	}, [search]);

	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-32 py-3 sm:h-24  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Clientes
					</h1>
					<SearchInput
						Icon={IconUser}
						onSearch={(e) => setSearch(e.target.value)}
						propertie="clientes"
					/>
				</div>
			</header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{isLoading ? (
					<div className="flex justify-center items-center h-full">
						<Spinner />
					</div>
				) : null}

				{!isLoading && isError ? (
					<div className="flex flex-col justify-center items-center h-full">
						<p className="text-center font-bold text-3xl">
							¡Oh no! :(
						</p>
						<p className="text-center text-lg mt-5">
							Algo no ha salido como esperabamos. Por favor,
							intentalo más tarde.
						</p>
					</div>
				) : null}

				{!isLoading && !isError ? (
					<ul
						role="list"
						className="divide-y my-7 divide-gray-100 overflow-auto"
					>
						{clients.map((client) => (
							<Client client={client} key={client.customerId} />
						))}
					</ul>
				) : null}
			</section>
		</>
	);
};
