import { useEffect, useState } from "react";
import { IconCoin } from "@tabler/icons-react";

import { useGetExchangeRates } from "../api";
import { Currency as ICurrency } from "../interfaces";
import { Currency, SearchInput, Spinner } from "../components";

export const Currencies = () => {
	const [search, setSearch] = useState("");
	const [currencies, setCurrencies] = useState<ICurrency[]>([]);
	const { data, isError, isLoading } = useGetExchangeRates();

	useEffect(() => {
		if (!isError && !isLoading) {
			const normalizedSearch = search.toLowerCase();

			const filteredCurrencies = data.filter((currency) => {
				if (
					currency.name.toLowerCase().includes(normalizedSearch) ||
					currency.symbol.toLowerCase().includes(normalizedSearch)
				) {
					return currency;
				}
			});

			setCurrencies(filteredCurrencies);
		}
	}, [search, data, isError, isLoading]);

	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-32 py-3 sm:h-24  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Divisas
					</h1>
					<SearchInput
						Icon={IconCoin}
						onSearch={(e) => setSearch(e.target.value)}
						propertie="divisa"
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
						className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 divide-y my-7 divide-gray-100 overflow-auto w-full"
					>
						{currencies.map((currency) => (
							<Currency
								currency={currency}
								key={currency.symbol}
							/>
						))}
					</ul>
				) : null}
			</section>
		</>
	);
};
