import React from "react";
import "./Destination.css";
import data from "./DestinationData";
import { useState } from "react";

const Destination = () => {
	const [place, setPlace] = useState("Moon");

	return (
		<div className='destination-container'>
			<p className='destination-para'>
				<span className='destination-para-span'> 01</span> PICK YOUR DESTINATION
			</p>
			<div className='destination-card-container'>
				<div className='destination-card'>
					<img
						src={{ data }.data[place].img}
						alt={"Image of " + place}
						className='destination-card-img'
					/>
				</div>
				<div className='destination-card'>
					<div className='card-details'>
						<div className='card-nav'>
							<button
								className='card-btn'
								id='Moon'
								onClick={() => {
									setPlace("Moon");
								}}
							>
								MOON
							</button>
							<button
								className='card-btn'
								id='Mars'
								onClick={() => {
									setPlace("Mars");
								}}
							>
								MARS
							</button>
							<button
								className='card-btn'
								id='Europa'
								onClick={() => {
									setPlace("Europa");
								}}
							>
								EUROPA
							</button>
							<button
								className='card-btn'
								id='Titan'
								onClick={() => {
									setPlace("Titan");
								}}
							>
								TITAN
							</button>
						</div>
						<h1 className='card-heading'>{{ data }.data[place].title} </h1>
						<p className='card-desc'> {{ data }.data[place].description}</p>
						<hr className="destination-hr"/>
						<div className='card-footer'>
							<div>
								<h6> AVG. DISTANCE</h6>
								<h3 className="footer-deets">{{ data }.data[place].distance}</h3>
							</div>
							<div>
								<h6> EST. TRAVEL TIME</h6>
								<h3 className="footer-deets">{{ data }.data[place].travel}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
