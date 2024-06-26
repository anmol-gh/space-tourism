import "./Home.css";
// import Backgroun from "../../Components/"


const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-half-text'>
				<p className='home-textmedium'>SO, YOU WANT TO TRAVEL TO</p>
				<p className='home-textxl'> SPACE</p>
				<p className="home-textsmall">
					Let’s face it; if you want to go to space, you might as well genuinely
					go <br></br>to outer space and not hover kind of on the edge of it.
					Well sit back, <br></br>and relax because we’ll give you a truly out
					of this world experience!
				</p>
			</div>
			<div className='home-half'>
				<button className='home-btn'> Explore</button>
			</div>
		</div>
	);
};

export default Home;
