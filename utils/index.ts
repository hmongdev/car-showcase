export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key':
			'6cd7a9be35msh2ef8d883420aaf8p1ff951jsn152c5cd062df',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};
	const response = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
		{
			headers: headers,
		}
	);

	const result = await response.json();
	return result;
}
