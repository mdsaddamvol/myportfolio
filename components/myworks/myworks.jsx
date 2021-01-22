import React from "react";
import Link from "next/link";
const Myworks = () => {
	return (
		<section className='main'>
			<h1>MY WORKS EXAMPLES</h1>
			<div className='works-container'>
				<div className='card1'>
					<Link href='https://hire-lie.herokuapp.com'>
						<a target='_blank'>
							<div className='work'>
								<h2>ECOMMERCE EXAMPLE</h2>
							</div>
						</a>
					</Link>
				</div>
				<div className='card2'>
					<Link href='https://instructory-clone.herokuapp.com/'>
						<a target='_blank'>
							<div className='work'>
								<h2>LMS EXAMPLE</h2>
							</div>
						</a>
					</Link>
				</div>
			</div>
			<style jsx>{`
				.main {
					background-color: #7812c5;
					padding-top: 50px;
					padding-bottom: 50px;
					color: white;
				}
				.main h1 {
					text-align: center;
					margin-top: 0;
				}
				.works-container {
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
				}
				.work {
					width: 100%;
					height: 100%;
					display: flex;
					background-color: rgba(0, 0, 0, 0.7);
					justify-content: center;
					align-items: center;
					border-radius: 9px;
				}
				.work:hover {
					transform: scale(1.2);
				}

				.card1 {
					background-image: url("/static/shop.png");
					background-size: cover;
					height: 60vh;
					width: 60vh;
					margin: 20px;
					border-radius: 10px;
					overflow: hidden;
				}
				.card2 {
					background-image: url("/static/Lms.png");
					background-size: cover;
					height: 60vh;
					width: 60vh;
					margin: 20px;
					border-radius: 10px;
					overflow: hidden;
				}
			`}</style>
		</section>
	);
};

export default Myworks;
