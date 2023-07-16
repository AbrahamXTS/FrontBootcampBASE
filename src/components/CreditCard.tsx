interface Props {
	name: string;
	cardNumber: string;
	balance: number;
}

export const CreditCard = ({ name, cardNumber, balance }: Props) => {
	return (
		<li className="max-w-md h-64 bg-red-100 rounded-xl relative text-white shadow-2xl mx-auto">
			<img
				className="relative object-cover w-full h-full rounded-xl"
				src="https://i.imgur.com/kGkSg1v.png"
			/>

			<div className="w-full px-8 absolute top-8">
				<div className="flex justify-between">
					<div className="">
						<p className="font-light">Nombre</p>
						<p className="font-medium tracking-widest">
							{name}
						</p>
					</div>
					<img
						className="w-14 h-14"
						src="https://i.imgur.com/bbPHJVe.png"
					/>
				</div>

				<div className="pt-3">
					<p className="font-light">Número de tarjeta</p>
					<p className="font-medium tracking-more-wider">
						{cardNumber}
					</p>
				</div>

				<div className="pt-5">
					<div className="">
						<p className="font-light text-xs">Balance</p>
						<p className="font-bold tracking-more-wider text-sm">
							${balance}
						</p>
					</div>
				</div>
			</div>
		</li>
	);
};
