import React from "react";
import Aboutme from "../components/aboutme";
import Contactform from "../components/contact/contact";
import Hero from "../components/hero/hero";
import Nav from "../components/hero/nav";
import Myworks from "../components/myworks/myworks";
//comment 
class Home extends React.Component {
	render() {
		return (
			<>
				<Nav />
				<Hero />
				<div id='scrollInAbout'></div>
				<Aboutme />
				<div id='scrollInWorks'></div>
				<Myworks />
				<div id='scrollInContactform'></div>
				<Contactform />

				<style jsx global>
					{`
						html {
							scroll-behavior: smooth;
						}
						body {
							margin: 0;
							padding: 0;
						}
					`}
				</style>
			</>
		);
	}
}

export default Home;
