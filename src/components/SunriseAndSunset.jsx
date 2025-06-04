import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { TbSunHigh, TbSunLow } from "react-icons/tb";

const SunriseAndSunset = ({ data }) => {
	// Convert Unix timestamps to readable time
	const formatTime = (timestamp) => {
		const date = new Date(timestamp * 1000);
		return date.toLocaleTimeString('en-US', { 
			hour: 'numeric', 
			minute: '2-digit',
			hour12: true 
		});
	};

	return (
		<div className="space-y-8 text-gray-900">
			{/* Sunrise and Sunset */}
			<div className="flex items-center justify-between">
				{/* Sunrise */}
				<div className="flex flex-col items-center space-y-3">
					<div className="bg-orange-200 p-4 rounded-full">
						<FiSunrise size={28} className="text-orange-600" />
					</div>
					<div className="text-center">
						<p className="text-sm text-gray-600">Sunrise</p>
						<p className="text-xl font-medium text-gray-800">
							{formatTime(data.sys.sunrise)}
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="h-16 w-px bg-gray-300" />

				{/* Sunset */}
				<div className="flex flex-col items-center space-y-3">
					<div className="bg-orange-200 p-4 rounded-full">
						<FiSunset size={28} className="text-orange-600" />
					</div>
					<div className="text-center">
						<p className="text-sm text-gray-600">Sunset</p>
						<p className="text-xl font-medium text-gray-800">
							{formatTime(data.sys.sunset)}
						</p>
					</div>
				</div>
			</div>

			{/* Temperature Range */}
			<div className="flex items-center justify-between">
				{/* High Temperature */}
				<div className="flex flex-col items-center space-y-3">
					<div className="bg-blue-200 p-4 rounded-full">
						<TbSunHigh size={28} className="text-blue-600" />
					</div>
					<div className="text-center">
						<p className="text-sm text-gray-600">High</p>
						<p className="text-xl font-medium text-gray-800">
							{Math.round(data.main.temp_max)}&deg;
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="h-16 w-px bg-gray-300" />

				{/* Low Temperature */}
				<div className="flex flex-col items-center space-y-3">
					<div className="bg-blue-200 p-4 rounded-full">
						<TbSunLow size={28} className="text-blue-600" />
					</div>
					<div className="text-center">
						<p className="text-sm text-gray-600">Low</p>
						<p className="text-xl font-medium text-gray-800">
							{Math.round(data.main.temp_min)}&deg;
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SunriseAndSunset;
