import React from "react";
import Aboutme from "../components/aboutme";
import Contactform from "../components/contact/contact";
import Hero from "../components/hero/hero";
import Nav from "../components/hero/nav";

const Home = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Aboutme />
			<Contactform />
			<style jsx global>
				{`
					body {
						margin: 0;
						padding: 0;
					}
				`}
			</style>
		</>
	);
};

export default Home;
