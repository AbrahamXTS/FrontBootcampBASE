import { Link } from "react-router-dom";

export const Dashboard = () => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col items-center justify-center h-24 px-4 mx-auto sm:flex-row sm:justify-between max-w-7xl sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Inicio
					</h1>
				</div>
			</header>

			<section className="flex flex-col items-center justify-center h-[calc(100vh-15rem)]">
				{/* Cambiar por la información del cliente */}
				<h2 className="text-4xl font-bold text-center text-gray-700">
					Bienvenido Abraham
				</h2>
				<p className="mt-12 text-lg text-center">
					Por favor, selecciona uno de los módulos disponibles para
					empezar:
				</p>

				<div className="flex gap-10 mt-8">
					<Link to="/clients" className="underline ">
						Clientes
					</Link>
					<Link to="/currencies" className="underline">
						Divisas
					</Link>
				</div>
			</section>
		</>
	);
};
