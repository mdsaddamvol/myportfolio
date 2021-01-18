import React, { Component } from "react";
import Aboutme from "../components/aboutme";
import Hero from "../components/hero/hero";
import Nav from "../components/hero/nav";

class Home extends Component {
	render() {
		return (
			<>
				<Nav />
				<Hero />
				<Aboutme />
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
	}
}

export default Home;
