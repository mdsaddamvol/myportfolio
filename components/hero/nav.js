import React from "react";
import Link from "next/link";

function Nav() {
	return (
		<nav className='nav'>
			<Link href='#scrollInWorks'>
				<a className='links'>MY WORKS</a>
			</Link>
			<img className='logo' src='/static/logo.png' alt='logo' />
			<Link href='#scrollInAbout'>
				<a className='links'>ABOUT ME</a>
			</Link>

			<style jsx>{`
				.nav {
					width: 100%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					top: 0;
					background: white;
					border-bottom: 2px solid bisque;
					box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
				}
				.logo {
					width: 7vw;
					margin: 10px;
					justify-self: center;
					animation: spin 5s infinite;
					animation-timing-function: linear;
				}
				.links {
					padding: 5px;
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
						text-decoration: none;
					}
					.logo {
						width: 15vw;
					}
				}
			`}</style>
		</nav>
	);
}

export default Nav;
