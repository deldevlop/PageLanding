import { object } from "prop-types";
import React from "react";

function Jumbotron() {
	return (
		<><div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://cdn.pixabay.com/photo/2023/08/05/23/58/sneakers-8171942_1280.jpg" className="d-block w-100 " alt="..." style={{
						width: '30rem',
						height: '20rem',
						display: 'flex',
						margin: 'auto',
						//marginBottom:'10px'
					}} />
				</div>
				<div className="carousel-item">
					<img style={{
						width: '30rem',
						height: '20rem',
						display: 'flex',
						margin: 'auto',
						//marginBottom:'10px'
					}} src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg" className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img style={{
						width: '30rem',
						height: '20rem',
						display: 'flex',
						margin: 'auto',
						//marginBottom:'10px'
					}} src="https://cdn.pixabay.com/photo/2020/05/04/07/15/nike-5128118_1280.jpg" className="d-block w-100" alt="..." />
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div><div className="container jumbotron bg-light">

				<h1 className="fs-1 text-capitalize pt-4 ">Welcome to Nike: Unleash Your Potential</h1>
				<p className="">At Nike, we believe in the power of sport to unleash human potential. Whether you're hitting the pavement, dominating the court, or pushing your limits in the gym, we're here to equip you with the gear and inspiration you need to reach your goals.

					From our iconic Air Jordans to our innovative Flyknit technology, every product we create is designed to elevate your performance and style. Explore our latest collections, discover exclusive collaborations, and join a community of athletes and enthusiasts who share your passion for excellence.

					With Nike, every step is a stride toward greatness. Let's chase dreams, break records, and redefine what's possible - together.</p>
				<p className="lead pb-5">
					<a className="btn btn-primary" href="#" role="button">Call to action!</a>
				</p>


			</div></>


	);
};

export default Jumbotron;