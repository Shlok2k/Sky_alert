import React, { useState } from "react";
import {
	Forecast,
	Inputs,
	SunriseAndSunset,
	TemperatureAndDetails,
} from "../components";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../components/Api";

const Home = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(" ");

		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800 py-20 px-4 md:px-8 lg:px-16'>
			<div className='max-w-[1200px] mx-auto space-y-10'>
				{/* Main Weather Section with dark gradient */}
				<div className='bg-gradient-to-br from-[#1a2a3a] to-[#2c3e50] text-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-10 space-y-8'>
					<Inputs onSearchChange={handleOnSearchChange} />
					{currentWeather && <TemperatureAndDetails data={currentWeather} />}
				</div>

				{/* Additional Information Section */}
				{currentWeather && forecast && (
					<div className='space-y-8'>
						{/* Sunrise/Sunset Card */}
						<div className='bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-8'>
							<SunriseAndSunset data={currentWeather} />
						</div>

						{/* Forecast Card */}
						<div className='bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-8'>
							<Forecast title='Daily Forecast' data={forecast} />
						</div>
					</div>
				)}
			</div>		
		</div>
	);
};

export default Home;

