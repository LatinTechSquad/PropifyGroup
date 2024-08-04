'use client';

const SearchBox = () => {
	return (
		<section className="w-full bg-gray-200 py-8">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-4">Cuadro de Búsqueda</h2>
				<div className="flex justify-center">
					<input
						type="text"
						placeholder="Buscar..."
						className="border border-gray-300 rounded-lg p-2 w-full max-w-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default SearchBox;
