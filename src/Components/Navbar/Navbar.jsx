import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import checkURL from "../CheckURL";
import logo from "../../Assets/shared/logo.svg";

setInterval(() => {
	checkURL();
}, 100);

const Navbar = () => {
	const Navigate = useNavigate();
	return (
		<div className='navbar-container'>
			<div className='navbar-half'>
				<img src={logo}></img>
				<hr className="navbar-hr"/>
			</div>
			<div className='navbar-half bg-grey'>
				<button className='navbar-btn' id='home' onClick={() => Navigate("/")}>
					00 &nbsp;Home
				</button>
				<button
					className='navbar-btn'
					id='destination'
					onClick={() => Navigate("/destination")}
				>
					01 &nbsp;Destination
				</button>
				<button
					className='navbar-btn'
					id='crew'
					onClick={() => Navigate("/crew")}
				>
					02 &nbsp;Crew	
				</button>
				<button
					className='navbar-btn'
					id='technology'
					onClick={() => Navigate("/technology")}
				>
					03 &nbsp;Technology
				</button>
			</div>
		</div>
	);
};

export default Navbar;
