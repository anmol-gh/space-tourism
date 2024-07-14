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
								}}
							>
								1
							</button>
							<button
								className='tech-btn'
								onClick={() => {
									setTech("Spaceport");
								}}
							>
								2
							</button>
							<button
								className='tech-btn'
								onClick={() => {
									setTech("Capsule");
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
