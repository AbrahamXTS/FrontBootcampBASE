import { IconCoin } from "@tabler/icons-react";
import { Currency, SearchInput } from "../components";
import { currenciesMock as currencies } from "../DB/Currencies";

export const Currencies = () => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col items-center justify-center px-4 mx-auto h-fit sm:h-24 sm:flex-row sm:justify-between max-w-7xl sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Divisas
					</h1>
					<SearchInput Icon={IconCoin} propertie="divisa" />
					<div className="justify-end my-2 sm:text-sm">
						<label htmlFor="order">Ordenar por Precio: </label>
						<select name="order">
							<option value="decrement">Mayor a menor</option>
							<option value="increment">Menor a mayor</option>
						</select>
					</div>
				</div>
			</header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul
					role="list"
					className="grid w-full gap-3 overflow-auto divide-y divide-gray-100 sm:grid-cols-2 xl:grid-cols-4 my-7"
				>
					{currencies.map((currency, index) => (
						<Currency currency={currency} key={index} />
					))}
				</ul>
			</section>
		</>
	);
};
