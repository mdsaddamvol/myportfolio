import React from "react";
import Aboutme from "../components/aboutme";
import Contactform from "../components/contact/contact";
import Hero from "../components/hero/hero";
import Nav from "../components/hero/nav";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.Aboutme = React.createRef();
		this.Contactform = React.createRef();
	}

	render() {
		return (
			<>
				<Nav handleScroll={this.handleScroll} />
				<Hero Contactform={(c) => (this.Contactform = c)} />
				<div id='scrollInAbout'></div>
				<Aboutme />
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
