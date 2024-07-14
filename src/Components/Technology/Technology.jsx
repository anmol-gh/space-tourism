import React from "react";
import "./Technology.css";
import { useState, useEffect } from "react";
import techData from "./TechnologyData.js";

const Technology = () => {
	const [tech, setTech] = useState("Launch");
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 425);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className='tech-container'>
			<p className='tech-para'>
				<span className='tech-para-span'> 03</span> SPACE LAUNCH 101
			</p>
			<div className='tech-card-container'>
				<div className='tech-card tech-deets'>
					<div className='tech-details'>
						<div className='tech-btns'>
							<button
								className='tech-btn'
								onClick={() => {
									setTech("Launch");
									const image = document.querySelector(".tech-card-img");
									if (isMobile) {
										image.src =
											"https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/image-launch-vehicle-landscape.jpg";
									} else {
										image.src =
											"https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/image-launch-vehicle-portrait.jpg";
									}
								}}
							>
								1
							</button>
							<button
								className='tech-btn'
								onClick={() => {
									setTech("Spaceport");
									const image = document.querySelector(".tech-card-img");
									if (isMobile) {
										image.src =
											"https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/image-spaceport-landscape.jpg";
									} else {
										image.src =
											"https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/image-spaceport-portrait.jpg";
									}
								}}
							>
								2
							</button>
							<button
								className='tech-btn'
								onClick={() => {
									setTech("Capsule");
									const image = document.querySelector(".tech-card-img");
									if (isMobile) {
										image.src =
											"https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/image-space-capsule-landscape.jpg";
									} else {
										image.src =
											"https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/image-space-capsule-portrait.jpg";
									}
								}}
							>
								3
							</button>
						</div>
						<div className='tech-card-details'>
							<h3 className='tech-title'>
								{" "}
								{{ techData }.techData[tech].title}
							</h3>
							<h1 className='tech-name'>{{ techData }.techData[tech].name}</h1>
							<p className='tech-desc'>
								{{ techData }.techData[tech].description}
							</p>
						</div>
					</div>
				</div>
				<div className='tech-card'>
					<img
						className='tech-card-img'
						src={isMobile ? techData[tech].mobile : techData[tech].image}
						alt={"Image of " + tech}
					/>
				</div>
			</div>
		</div>
	);
};

export default Technology;
