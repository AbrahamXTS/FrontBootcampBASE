import { useParams } from "react-router-dom";

import { CreditCard, Spinner } from "../components";
import { useGetAccountsByClientId, useGetClientById } from "../api";

export const Client = () => {
	const { id } = useParams();

	const client = useGetClientById(Number(id));
	const accounts = useGetAccountsByClientId(Number(id));

	return (
		<>
			{accounts.isLoading ? (
				<div className="flex justify-center items-center h-[calc(100vh-10rem)]">
					<Spinner />
				</div>
			) : null}

			{!accounts.isLoading && accounts.isError ? (
				<div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)]">
					<p className="text-center font-bold text-3xl">¡Oh no! :(</p>
					<p className="text-center text-lg mt-5">
						Algo no ha salido como esperabamos. Por favor, intentalo
						más tarde.
					</p>
				</div>
			) : null}

			{!accounts.isLoading && !accounts.isError ? (
				<>
					<header className="bg-white shadow">
						<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
								{client.data?.name}
							</h1>
						</div>
					</header>

					<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-7 w-full">
							{accounts.data.map(({ accountNumber, balance }) => (
								<CreditCard
									balance={balance}
									cardNumber={accountNumber}
									key={accountNumber}
									name={client.data?.name ?? ""}
								/>
							))}
						</ul>
					</section>
				</>
			) : null}
		</>
	);
};
