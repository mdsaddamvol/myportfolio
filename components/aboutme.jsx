import React from "react";
import Skills from "./mySkills";
const Aboutme = () => {
	return (
		<div className='aboutmeAndSkills'>
			<div className='aboutme_text'>
				<h1>ABOUT ME</h1>
				<p>My name is saddam hosen. I am a full-stack web-developer.</p>
			</div>
			<div className='skills'>
				<Skills />
			</div>

			<style jsx>{`
				.aboutmeAndSkills {
					width: 100%;
					height: 80vh;
					color: white;
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
					text-align: center;
				}
				.skills {
					flex: 1 1 500px;
				}
				.aboutmeAndSkills::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</div>
	);
};

export default Aboutme;
