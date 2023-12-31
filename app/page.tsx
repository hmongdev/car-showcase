import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore} from '@components';
import { fetchCars } from '@utils';
import { fuels, yearsOfProduction } from '../constants/index';

export default async function Home({ searchParams }: any) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
		model: searchParams.model || '',
	});

	// console.log(allCars);

	// check if data is empty
	const isDataEmpty =
		!Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className="overflow-hidden">
			<Hero />
			<div
				className="mt-12 padding-x padding-y max-width"
				id="discover"
			>
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">
						Car Catalogue
					</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className="home__filters">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars?.map((car) => (
								<CarCard
									car={
										car
									}
								/>
							))}
						</div>
						<ShowMore
							// what page are we on?
							pageNumber={(searchParams.limit || 10) / 10}
							// does the next page exist?
						isNext={(searchParams.limit || 10) > allCars.length}
						/>
					</section>
				) : (
					<div className="home__container">
						<h2 className="text-black text-xl font-bold">
							Oops
							<p>
								{
									allCars?.message
								}
							</p>
						</h2>
					</div>
				)}
			</div>
		</main>
	);
}
