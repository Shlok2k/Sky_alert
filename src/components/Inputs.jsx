import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoLocation, GoSearch } from "react-icons/go";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./Api";

function Inputs({ onSearchChange }) {
	const [search, setSearch] = useState(null);

	const handleOnchange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	const loadOptions = (inputValue) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			})
			.catch((err) => console.error(err));
	};

	const customStyles = {
		control: (base) => ({
			...base,
			background: 'rgba(255, 255, 255, 0.15)',
			border: '1px solid rgba(255, 255, 255, 0.3)',
			boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
			borderRadius: '12px',
			padding: '8px 16px',
			minHeight: '50px',
			backdropFilter: 'blur(5px)',
			'&:hover': {
				borderColor: 'rgba(255, 255, 255, 0.5)',
			},
		}),
		input: (base) => ({
			...base,
			color: 'white',
			fontSize: '1.1rem',
		}),
		placeholder: (base) => ({
			...base,
			color: 'rgba(255, 255, 255, 0.7)',
			fontSize: '1.1rem',
		}),
		menu: (base) => ({
			...base,
			background: 'white',
			borderRadius: '12px',
			overflowY: 'auto',
			maxHeight: '200px',
			zIndex: 99999,
			marginTop: '8px',
			boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
			position: 'absolute',
			width: '100%',
		}),
		option: (base, state) => ({
			...base,
			background: state.isFocused ? '#e5e7eb' : 'white',
			color: '#1f2937',
			cursor: 'pointer',
			padding: '12px 16px',
			'&:hover': {
				background: '#e5e7eb',
				color: '#1f2937',
			},
		}),
		singleValue: (base) => ({
			...base,
			color: 'white',
		}),
		indicatorSeparator: (base) => ({
			...base,
			display: 'none',
		}),
		dropdownIndicator: (base) => ({
			...base,
			color: 'rgba(255, 255, 255, 0.7)',
			'&:hover': {
				color: 'white',
			},
		}),
	};

	return (
		<div className='w-full max-w-2xl mx-auto mb-8'>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
					<GoSearch size={20} className='text-white opacity-70' />
				</div>
				<AsyncPaginate
					debounceTimeout={600}
					onChange={handleOnchange}
					loadOptions={loadOptions}
					value={search}
					placeholder='Search for a city...'
					styles={customStyles}
					className='w-full'
					menuPortalTarget={document.body}
				/>
				<motion.div 
					className='absolute inset-y-0 right-0 pr-4 flex items-center'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<GoLocation size={20} className='text-white opacity-70 cursor-pointer hover:opacity-100 transition-colors' />
				</motion.div>
			</div>
		</div>
	);
}

export default Inputs;
