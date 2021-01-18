import React from "react";

const Skills = () => {
	return (
		<>
			<div className='skils_container'>
				<h1>MY SKILLS</h1>
				<div className='skils'>
					<div className='frontEnd'>
						<h3>FRONT-END</h3>
						<ul>
							<li>HTML 5</li>
							<li>CSS 3</li>
							<li>SCSS</li>
							<li>BOOTSTRAP 4</li>
							<li>JAVASCRIPT</li>
							<li>REACT</li>
							<li>REDUX</li>
							<li>APPOLO-CLIENT</li>
						</ul>
					</div>
					<div className='backEnd'>
						<h3>BACK-END</h3>
						<ul>
							<li>NODEJS</li>
							<li>EXPRESSJS</li>
							<li>NEXTJS</li>
							<li>JWT</li>
							<li>SQL</li>
							<li>POSTGRES</li>
							<li>REDIS</li>
							<li>FIREBASE</li>
							<li>GRAPHQL</li>
							<li>KNEXJS</li>
							<li>AWS</li>
						</ul>
					</div>
					<div className='devTools'>
						<h3>DEV TOOLS</h3>
						<ul>
							<li>GIT</li>
							<li>GITHUB</li>
							<li>YARN</li>
							<li>VSCODE</li>
							<li>DOCKER</li>
							<li>POSTMAN</li>
							<li>CHROME</li>
							<li>PHOTOSHOP</li>
							<li>ILLuSTRATOR</li>
						</ul>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.skils_container {
						width: 100%;
						height: 80vh;
						text-align: center;
					}
					.skils {
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
					}
					.frontEnd {
						flex: 1 1 200px;
					}
					.backEnd {
						flex: 1 1 200px;
					}
					.devTools {
						flex: 1 1 200px;
					}
				`}
			</style>
		</>
	);
};

export default Skills;
