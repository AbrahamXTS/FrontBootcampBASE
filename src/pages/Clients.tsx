import { IconUser } from "@tabler/icons-react";
import { Client, SearchInput } from "../components";
import { clientsMock as clients } from "../DB/Clients";

export const Clients = () => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="flex flex-col items-center justify-center h-32 px-4 py-3 mx-auto sm:flex-row sm:justify-between sm:h-16 max-w-7xl sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Clientes
					</h1>
					<SearchInput
						Icon={IconUser}
						onSearch={console.log}
						propertie="clientes"
					/>
				</div>
			</header>
			<section>
				<div className="flex items-center gap-3 mt-4 ml-8">
					<span>Filtrar por:</span>
					<div className="flex items-center">
						<input
							className="mr-1"
							name="genderRadio"
							type="radio"
							value="HOMBRE"
							id="hombreRadio"
						/>
						<label htmlFor="hombreRadio">Hombre</label>
					</div>
					<div className="flex items-center">
						<input
							className="mr-1"
							name="genderRadio"
							type="radio"
							value="MUJER"
							id="mujerRadio"
						/>
						<label htmlFor="muejerRadio">Mujer</label>
					</div>
				</div>
				<div className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<ul
						role="list"
						className="my-4 overflow-auto divide-y divide-gray-100"
					>
						{/* Iterar sobre cada cliente del arreglo: */}
						<Client
							client={{
								birthdate: "1977-10-12T00:00:00.000Z",
								curp: "OEAF771012HMCRGR09",
								customerId: 0,
								name: "Francisco Ortega Aguilar",
								gender: "HOMBRE",
							}}
						/>
					</ul>
				</div>
			</section>
		</>
	);
};
