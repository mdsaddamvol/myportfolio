import React from "react";
import Skills from "./mySkills";
const Aboutme = () => {
	return (
		<div className='aboutmeAndSkills'>
			<div className='aboutme_text'>
				<h1>ABOUT ME</h1>
				<p>
					I am Md Saddam hosen. I am from Bangladesh. I learned web-development
					from Udemy. I completed a diploma in electrical engineering. There was
					a subject in my curriculum called 'programming in c '.when I studied
					this subject I felt like I should become a programmer. After finishing
					the diploma. I choose to become a full-stack web developer. I spent 2
					years learning web development. Now I am creating some real-world
					applications like LMS, E-commerce website to showcase in my portfolio.
					I will add them soon.
				</p>
			</div>
			<div className='skills'>
				<Skills />
			</div>

			<style jsx>{`
				.aboutmeAndSkills {
					width: 100%;
					height: 80vh;
					color: bisque;
					display: flex;
					flex-wrap: wrap;
					padding-top: 50px;
					background-color: black;
					overflow: scroll;
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				.aboutme_text {
					flex: 1 1 500px;
					text-align: justify;
					padding: 10px;
					align-self: start;
				}
				.aboutme_text h1 {
					text-align: center;
				}
				.skills {
					flex: 1 1 500px;
				}
				.aboutmeAndSkills::-webkit-scrollbar {
					display: none;
				}
				@media screen and (max-width: 700px) {
					.aboutmeAndSkills {
						margin-bottom: 0;
						padding-top: 0;
						height: auto;
						overflow: auto;
					}
				} ;
			`}</style>
		</div>
	);
};

export default Aboutme;
