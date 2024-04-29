import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Card from "../../../src/js/component/Card.jsx";
import Footer from "../../../src/js/component/Footer.jsx";
//create your first component
function Home() {
	return (
		<>
			<div className="container">
				<Card />
			</div>
			<Footer />
		</>

	);
};

export default Home;
