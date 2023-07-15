import { IconCoin } from "@tabler/icons-react";
import { Currency, SearchInput } from "../components";
import { Currency as ICurrency } from "../interfaces";

export const Currencies = () => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Divisas
					</h1>
					<SearchInput Icon={IconCoin} propertie="divisa" />
				</div>
			</header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul
					role="list"
					className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 divide-y my-7 divide-gray-100 overflow-auto w-full"
				>
					{currencies.map((currency) => (
						<Currency currency={currency} key={currency.symbol} />
					))}
				</ul>
			</section>
		</>
	);
};

const currencies: ICurrency[] = [
	{
		name: "Ruble",
		symbol: "RUB",
		value: 149.990096,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 1362.519634,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 16.83,
	},
	{
		name: "Koruna",
		symbol: "CZK",
		value: 69.06,
	},
	{
		name: "Won",
		symbol: "KPW",
		value: 59.29,
	},
	{
		name: "Dong",
		symbol: "VND",
		value: 8.25,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 53.0,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 18.32,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 21.05,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 98.66,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 64.16,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 50.33,
	},
	{
		name: "Rand",
		symbol: "ZAR",
		value: 98.82,
	},
	{
		name: "Dirham",
		symbol: "MAD",
		value: 6.89,
	},
	{
		name: "Dollar",
		symbol: "CAD",
		value: 27.34,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 96.4,
	},
	{
		name: "Shilling",
		symbol: "TZS",
		value: 12.32,
	},
	{
		name: "Peso",
		symbol: "PHP",
		value: 15.14,
	},
	{
		name: "Afghani",
		symbol: "AFN",
		value: 46.24,
	},
	{
		name: "Naira",
		symbol: "NGN",
		value: 18.91,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 69.17,
	},
	{
		name: "Krone",
		symbol: "NOK",
		value: 30.15,
	},
	{
		name: "Shekel",
		symbol: "ILS",
		value: 23.41,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 53.25,
	},
	{
		name: "Koruna",
		symbol: "CZK",
		value: 72.44,
	},
	{
		name: "Kuna",
		symbol: "HRK",
		value: 41.65,
	},
	{
		name: "Lari",
		symbol: "GEL",
		value: 23.85,
	},
	{
		name: "Naira",
		symbol: "NGN",
		value: 26.79,
	},
	{
		name: "Hryvnia",
		symbol: "UAH",
		value: 5.29,
	},
	{
		name: "Peso",
		symbol: "COP",
		value: 78.66,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 13.96,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 23.87,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 94.1,
	},
	{
		name: "Zloty",
		symbol: "PLN",
		value: 21.26,
	},
	{
		name: "Dollar",
		symbol: "AUD",
		value: 40.48,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 8.93,
	},
	{
		name: "Dinar",
		symbol: "RSD",
		value: 19.97,
	},
	{
		name: "Zloty",
		symbol: "PLN",
		value: 31.1,
	},
	{
		name: "Dram",
		symbol: "AMD",
		value: 50.47,
	},
	{
		name: "Rand",
		symbol: "ZAR",
		value: 4.17,
	},
	{
		name: "Ruble",
		symbol: "RUB",
		value: 67.91,
	},
	{
		name: "Lari",
		symbol: "GEL",
		value: 35.89,
	},
	{
		name: "Ruble",
		symbol: "RUB",
		value: 25.21,
	},
	{
		name: "Zloty",
		symbol: "PLN",
		value: 13.84,
	},
	{
		name: "Sol",
		symbol: "PEN",
		value: 14.97,
	},
	{
		name: "Tala",
		symbol: "WST",
		value: 49.47,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 21.97,
	},
	{
		name: "Yen",
		symbol: "JPY",
		value: 86.7,
	},
	{
		name: "Baht",
		symbol: "THB",
		value: 95.72,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 21.53,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 42.98,
	},
	{
		name: "Krona",
		symbol: "SEK",
		value: 6.19,
	},
	{
		name: "Shilling",
		symbol: "KES",
		value: 76.12,
	},
	{
		name: "Peso",
		symbol: "PHP",
		value: 3.12,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 25.38,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 34.67,
	},
	{
		name: "Dollar",
		symbol: "USD",
		value: 17.29,
	},
	{
		name: "Yen",
		symbol: "JPY",
		value: 71.22,
	},
	{
		name: "Lempira",
		symbol: "HNL",
		value: 52.45,
	},
	{
		name: "Dollar",
		symbol: "USD",
		value: 9.52,
	},
	{
		name: "Ruble",
		symbol: "RUB",
		value: 37.09,
	},
	{
		name: "Dollar",
		symbol: "CAD",
		value: 15.4,
	},
	{
		name: "Peso",
		symbol: "PHP",
		value: 30.47,
	},
	{
		name: "Ruble",
		symbol: "RUB",
		value: 46.64,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 15.45,
	},
	{
		name: "Dollar",
		symbol: "USD",
		value: 26.16,
	},
	{
		name: "Dollar",
		symbol: "USD",
		value: 23.23,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 61.53,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 39.78,
	},
	{
		name: "Ruble",
		symbol: "RUB",
		value: 13.1,
	},
	{
		name: "Won",
		symbol: "KPW",
		value: 93.15,
	},
	{
		name: "Baht",
		symbol: "THB",
		value: 28.1,
	},
	{
		name: "Metical",
		symbol: "MZN",
		value: 44.73,
	},
	{
		name: "Dollar",
		symbol: "USD",
		value: 43.52,
	},
	{
		name: "Peso",
		symbol: "PHP",
		value: 23.63,
	},
	{
		name: "Baht",
		symbol: "THB",
		value: 55.02,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 54.44,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 70.11,
	},
	{
		name: "Zloty",
		symbol: "PLN",
		value: 85.58,
	},
	{
		name: "Real",
		symbol: "BRL",
		value: 57.6,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 92.23,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 48.4,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 79.16,
	},
	{
		name: "Real",
		symbol: "BRL",
		value: 17.82,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 34.44,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 25.41,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 17.25,
	},
	{
		name: "Rand",
		symbol: "ZAR",
		value: 65.44,
	},
	{
		name: "Peso",
		symbol: "PHP",
		value: 93.48,
	},
	{
		name: "Pound",
		symbol: "SYP",
		value: 18.7,
	},
	{
		name: "Peso",
		symbol: "COP",
		value: 19.57,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 74.5,
	},
	{
		name: "Cordoba",
		symbol: "NIO",
		value: 24.16,
	},
	{
		name: "Rupiah",
		symbol: "IDR",
		value: 6.64,
	},
	{
		name: "Euro",
		symbol: "EUR",
		value: 21.69,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 90.7,
	},
	{
		name: "Kyat",
		symbol: "MMK",
		value: 50.35,
	},
	{
		name: "Franc",
		symbol: "XPF",
		value: 69.98,
	},
	{
		name: "Yuan Renminbi",
		symbol: "CNY",
		value: 23.58,
	},
	{
		name: "Peso",
		symbol: "MXN",
		value: 19.69,
	},
];
