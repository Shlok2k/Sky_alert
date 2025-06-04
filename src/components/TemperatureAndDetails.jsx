import React from "react";
import { GoLocation } from "react-icons/go";
// import { sun,moon,dCloudy } from "../assets/icons";
import { temp, wind, humid } from "../assets/images";


const TemperatureAndDetails = ({ data }) => {
	return (
		<div className="space-y-6 text-white">
			{/* Location */}
			<div className="flex items-center justify-center">
				<p className="flex items-center text-white text-2xl font-medium">
					<GoLocation size={24} className="mr-2 text-blue-300" />
					{data.city}
				</p>
			</div>

			{/* Main Temperature Display */}
			<div className="flex items-center justify-between py-4">
				<div className="flex flex-col md:flex-row items-center justify-around w-full px-4 md:px-8 space-y-6 md:space-y-0">
					{/* Weather Icon */}
					<div className="transform hover:scale-105 transition-transform duration-300">
						<img
							src={`icons/${data.weather[0].icon}.svg`}
							alt={data.weather[0].description}
							className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] h-48 w-48 md:h-52 md:w-52"
						/>
					</div>

					{/* Temperature and Description */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
						<div className="flex items-baseline">
							<p className="text-8xl md:text-9xl font-bold text-white">
								{Math.round(data.main.temp)}
							</p>
							<span className="text-4xl md:text-5xl font-light text-gray-300 ml-1">
								&deg;
							</span>
						</div>
						<p className="text-xl md:text-2xl text-gray-300 capitalize">
							{data.weather[0].description}
						</p>
					</div>
				</div>
			</div>

			{/* Weather Details */}
			<div className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-inner">
				<div className="grid grid-cols-3 gap-6 text-white">
					{/* Feels Like */}
					<div className="flex flex-col items-center space-y-2">
						<div className="bg-white bg-opacity-20 p-3 rounded-full">
							<img src={temp} alt="Temperature" className="w-8 h-8 text-blue-300" />
						</div>
						<p className="text-lg font-medium text-white">
							{Math.round(data.main.feels_like)}&deg;
						</p>
						<p className="text-sm text-gray-300">Real feel</p>
					</div>

					{/* Humidity */}
					<div className="flex flex-col items-center space-y-2">
						<div className="bg-white bg-opacity-20 p-3 rounded-full">
							<img src={humid} alt="Humidity" className="w-8 h-8 text-blue-300" />
						</div>
						<p className="text-lg font-medium text-white">
							{data.main.humidity}%
						</p>
						<p className="text-sm text-gray-300">Humidity</p>
					</div>

					{/* Wind */}
					<div className="flex flex-col items-center space-y-2">
						<div className="bg-white bg-opacity-20 p-3 rounded-full">
							<img src={wind} alt="Wind" className="w-8 h-8 text-blue-300" />
						</div>
						<p className="text-lg font-medium text-white">
							{data.wind.speed} km/h
						</p>
						<p className="text-sm text-gray-300">Wind Speed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TemperatureAndDetails;
