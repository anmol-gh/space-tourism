import React from "react";
import crewData from "./CrewData.js";
import "./Crew.css";
import { useState } from "react";

const Crew = () => {
	const [crew, setCrew] = useState("Commander");
	return (
		<div className='crew-container'>
			<p className='crew-para'>
				<span className='crew-para-span'> 02</span> MEET YOUR CREW
			</p>
			<div className='crew-card-container'>
				<div className='crew-card'>
					<h3 className='crew-title'> {{ crewData }.crewData[crew].title}</h3>
					<h1 className='crew-name'>{{ crewData }.crewData[crew].name}</h1>
					<p className='crew-desc'>{{ crewData }.crewData[crew].description}</p>
					<div className='cre-buttons'>
						<button
							className='crew-btn'
							onClick={() => {
								setCrew("Commander");
							}}
						></button>
						<button
							className='crew-btn'
							onClick={() => {
								setCrew("Specialist");
							}}
						></button>
						<button
							className='crew-btn'
							onClick={() => {
								setCrew("Pilot");
							}}
						></button>
						<button
							className='crew-btn'
							onClick={() => {
								setCrew("Engineer");
							}}
						></button>
					</div>
				</div>
				<div className='crew-card'></div>
				<img src={{ crewData }.crewData[crew].img} alt={"Image of " + crew} />
			</div>
		</div>
	);
};

export default Crew;
