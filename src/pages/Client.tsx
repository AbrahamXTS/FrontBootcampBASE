import { CreditCard } from "../components";

export const Client = () => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
						{/* TODO: Consultar la información del cliente */}
						Abraham Espinosa Mendoza
					</h1>
				</div>
			</header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-7 w-full">
					{/* TODO: Iterar sobre cada cuenta del cliente */}
					<CreditCard
						name="Abraham Espinosa"
						cardNumber="4152313881756165"
						balance={0}
					/>
				</ul>
			</section>
		</>
	);
};
