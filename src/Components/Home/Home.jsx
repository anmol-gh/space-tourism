import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const Navigate = useNavigate();
	return (
		<div className='home-container'>
			<div className='home-half-text'>
				<p className='home-textmedium'>SO, YOU WANT TO TRAVEL TO</p>
				<p className='home-textxl'> SPACE</p>
				<p className='home-textsmall'>
					Let’s face it; if you want to go to space, you might {""}
					<br className='br-desktop' />
					as well genuinely go <br className='br-desktop' />
					to outer space and not hover <br className='br-' />
					kind of on the edge of it. Well sit back,{" "}
					<br className='br-desktop' />
					and relax because we’ll give you a truly out of this world experience!
				</p>
			</div>
			<div className='home-half'>
				<button className='home-btn' onClick={() => Navigate("/destination")}>
					{" "}
					EXPLORE
				</button>
			</div>
		</div>
	);
};

export default Home;
