'use client';

const SearchBox = () => {
	return (
		<section className="w-full bg-gray-200 py-8">
			<div className="container mx-auto">
				<div className="flex justify-center">
					<input
						type="text"
						placeholder="Buscar el inmueble que necesitas"
						className="border border-gray-300 rounded-lg p-2 w-full max-w-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default SearchBox;
