import React from "react";
// import { sun } from '../assets/icons'

const WEEK_DAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const Forecast = ({ data, title }) => {
	const daysInWeek = new Date().getDay();
	const forecastDays = WEEK_DAYS.slice(daysInWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, daysInWeek)
	);

	return (
		<div className="space-y-6 text-gray-900">
			{/* Title */}
			<div className="flex items-center justify-center">
				<h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
			</div>

			{/* Forecast Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{data.list.splice(0, 7).map((item, idx) => (
					<div
						key={idx}
						className="bg-white rounded-2xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						<div className="flex flex-col items-center space-y-4">
							{/* Day */}
							<p className="text-lg font-medium text-gray-700">
								{forecastDays[idx]}
							</p>

							{/* Weather Icon */}
							<div className="w-16 h-16">
								<img
									src={`icons/${item.weather[0].icon}.svg`}
									alt={item.weather[0].description}
									className="w-full h-full object-contain"
								/>
							</div>

							{/* Temperature */}
							<div className="flex items-baseline space-x-1">
								<p className="text-3xl font-bold text-gray-900">
									{Math.round(item.main.temp)}
								</p>
								<span className="text-xl text-gray-700">&deg;</span>
							</div>

							{/* Description */}
							<p className="text-sm text-gray-600 capitalize">
								{item.weather[0].description}
							</p>

							{/* Additional Details */}
							<div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-gray-200">
								<div className="text-center">
									<p className="text-sm text-gray-600">Humidity</p>
									<p className="text-lg font-medium text-gray-800">
										{item.main.humidity}%
									</p>
								</div>
								<div className="text-center">
									<p className="text-sm text-gray-600">Wind</p>
									<p className="text-lg font-medium text-gray-800">
										{item.wind.speed} km/h
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Forecast;
