import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logowhite, close, menu } from "../assets/images";
import { BiUserCircle } from "react-icons/bi";
import TopButtons from "./TopButtons";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [toggle2, setToggle2] = useState(false);
	return (
		<div>
			<nav className='fixed inset-x-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg items-center justify-between py-4 px-8 md:px-10 lg:px-16 z-[200] flex shadow-md'>
				{/* sidebar */}
				<div className='hidden max-[750px]:flex justify-start items-center'>
					<img
						src={toggle ? close : menu}
						className='w-[24px] h-[24px] object-contain cursor-pointer hover:opacity-80 transition-opacity text-gray-800'
						alt='menu'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "block"
						} p-6 absolute top-16 left-0 bottom-0 h-screen min-w-[280px] sidebar bg-white bg-opacity-95 backdrop-filter backdrop-blur-xl z-50 shadow-2xl text-gray-800`}
					>
						<div className="flex flex-col space-y-4 mt-8">
							<Link className="text-gray-800 hover:text-blue-600 transition-colors text-lg">Home</Link>
							<Link className="text-gray-800 hover:text-blue-600 transition-colors text-lg">About</Link>
							<Link className="text-gray-800 hover:text-blue-600 transition-colors text-lg">Contact</Link>
						</div>
					</div>
				</div>

				<Link to="/" className="hover:opacity-90 transition-opacity text-gray-800 text-2xl font-bold tracking-wide">
					SkyAlert
				</Link>

				<div className='flex items-center space-x-6 md:space-x-8 max-[750px]:space-x-4'>
					<span className='flex flex-row items-center justify-center space-x-2 md:space-x-3 max-[750px]:hidden text-gray-800'>
						<button name='metric' className='text-xl text-gray-800 font-medium hover:text-blue-600 transition-colors'>
							&deg;C
						</button>
						<p className='text-gray-800 text-xl mx-1'>|</p>
						<button name='imperial' className='text-xl text-gray-800 font-medium hover:text-blue-600 transition-colors'>
							&deg;F
						</button>
					</span>

					<BiUserCircle
						size={30}
						color='#374151'
						onClick={() => setToggle2(!toggle2)}
						className='ml-2 cursor-pointer text-gray-800 hover:text-blue-600 transition-colors'
					/>

					<div
						className={`${
							!toggle2 ? "hidden" : "block"
						} p-6 absolute top-16 right-4 my-2 min-w-[220px] rounded-xl sidebarr bg-white bg-opacity-95 backdrop-filter backdrop-blur-xl z-50 shadow-2xl text-gray-800`}
					>
						<div className='flex flex-col space-y-4'>
							<div className='flex flex-row items-center justify-center space-x-3 max-[750px]:flex'>
								<button name='metric' className='text-xl text-gray-800 font-medium hover:text-blue-600 transition-colors'>
									&deg;C
								</button>
								<p className='text-gray-800 text-xl mx-1'>|</p>
								<button name='imperial' className='text-xl text-gray-800 font-medium hover:text-blue-600 transition-colors'>
									&deg;F
								</button>
							</div>
							<div className="border-t border-gray-200 my-2"></div>
							<Link className="text-gray-800 hover:text-blue-600 transition-colors">Profile</Link>
							<Link className="text-gray-800 hover:text-blue-600 transition-colors">Settings</Link>
							<Link className="text-gray-800 hover:text-blue-600 transition-colors">Logout</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
