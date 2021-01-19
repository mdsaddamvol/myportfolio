import React, { useRef } from "react";

const Nav = () => {
	const aboutme = useRef();
	return (
		<nav className='nav'>
			<span className='links'>PORTFOLIO</span>
			<img className='logo' src='/static/logo.png' alt='logo' />
			<span className='links' onClick={() => aboutme.current.scrollIntoView()}>
				ABOUT ME
			</span>

			<style jsx>{`
				.nav {
					width: 100%;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					position: fixed;
					top: 0;
					background: white;
					border-bottom: 2px solid bisque;
					box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
				}
				.logo {
					width: 7vw;
					margin: 10px;
					animation: spin 5s infinite;
					animation-timing-function: linear;
				}
				.links {
					padding: 0.5vw;
					border: 3px solid blue;
					font-size: 25px;
					text-align: center;
					border-radius: 8px;
					color: #3f51b5;
					text-decoration: none;
				}
				@keyframes spin {
					100% {
						transform: rotate(360deg);
					}
				}
				@media screen and (max-width: 450px) {
					.links {
						font-size: 15px;
						border: 2px solid blue;
					}
					.logo {
						width: 15vw;
					}
				}
			`}</style>
		</nav>
	);
};

export default Nav;
