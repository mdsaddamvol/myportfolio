import Link from "next/link";
import React from "react";
const Hero = () => (
	<section className='hero_main'>
		<img className='profilePic' src='/static/p.png' />
		<h1 className='title'>I Am A Full-Stack Web Developer.</h1>
		<p className='discription'>
			I build scaleable web apps and back-end server.
		</p>
		<Link href='#scrollInContactform'>
			<a className='sayHi'>SAY HI</a>
		</Link>

		<style jsx>
			{`
				.hero_main {
					width: 100%;
					height: 90vh;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-content: flex-start;
					border-bottom: 2px solid bisque;
					box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
					padding-bottom: 50px;
				}

				.title {
					width: 100%;
					text-align: center;
					height: 1vh;
					color: #3f51b5;
				}
				.discription {
					width: 100vw;
					font-size: 20px;
					text-align: center;
					height: 1vh;
					color: #595c5d;
					padding: 10px;
				}
				.sayHi {
					width: 150px;
					border: 3px solid blue;
					font-size: 40px;
					text-align: center;
					border-radius: 8px;
					color: #3f51b5;
					margin-top: 30px;
					cursor: pointer;
				}
				.tech_pic {
					width: 50vw;
				}

				@media screen and (max-width: 850px) {
					.hero_main {
						width: 100vw;
						height: 420px;
					}
					.title {
						font-size: 20px;
					}
					.profilePic {
						width: 250px;
					}
					.discription {
						height: 0.5vh;
						font-size: 15px;
						margin-top: 15px;
						padding: 5px;
					}
					.sayHi {
						width: 80px;
						border: 2px solid blue;
						font-size: 20px;
						border-radius: 8px;
						margin-top: 20px;
						text-decoration: none;
					}
					.tech_pic_container {
						margin-top: 30px;
					}
				} ;
			`}
		</style>
	</section>
);

export default Hero;
