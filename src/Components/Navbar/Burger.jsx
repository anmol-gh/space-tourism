import React from "react";
import "./Burger.css";
import Hamburger from "../../Assets/shared/icon-hamburger.svg";
import HamburgerClose from "../../Assets/shared/icon-close.svg";
import { useNavigate } from "react-router-dom";

const Burger = () => {
	const Navigate = useNavigate();
	function toggleMenu() {
		const nav = document.querySelector(".burger-menu");
		nav.classList.toggle("active");
		const burger = document.querySelector(".burger-btn");
		burger.classList.toggle("active");
	}
	return (
		<div className='nav-burger'>
			<button className='burger-btn' onClick={toggleMenu}>
				<img src={Hamburger} alt='Hamburger icon' />
			</button>
			<div className='burger-menu'>
				<button
					className='burger-close'
					onClick={() => {
						const nav = document.querySelector(".burger-menu");
						nav.classList.remove("active");
						const burger = document.querySelector(".burger-btn");
						burger.classList.toggle("active");
					}}
				>
					<img src={HamburgerClose} alt='Hamburger Close icon' />
				</button>
				<button
					className='burger-menu-btn'
					onClick={() => {
						Navigate("/");
						const nav = document.querySelector(".burger-menu");
						nav.classList.remove("active");
						const burger = document.querySelector(".burger-btn");
						burger.classList.toggle("active");
					}}
				>
					00 Home
				</button>
				<button
					className='burger-menu-btn'
					onClick={() => {
						Navigate("/destination");
						const nav = document.querySelector(".burger-menu");
						nav.classList.remove("active");
						const burger = document.querySelector(".burger-btn");
						burger.classList.toggle("active");
					}}
				>
					01 Destination
				</button>
				<button
					className='burger-menu-btn'
					onClick={() => {
						Navigate("/crew");
						const nav = document.querySelector(".burger-menu");
						nav.classList.remove("active");
						const burger = document.querySelector(".burger-btn");
						burger.classList.toggle("active");
					}}
				>
					02 Crew
				</button>
				<button
					className='burger-menu-btn'
					onClick={() => {
						Navigate("/technology");
						const nav = document.querySelector(".burger-menu");
						nav.classList.remove("active");
						const burger = document.querySelector(".burger-btn");
						burger.classList.toggle("active");
					}}
				>
					03 Technology
				</button>
			</div>
		</div>
	);
};

export default Burger;
