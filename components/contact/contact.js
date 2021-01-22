import React, { useState } from "react";

const Contactform = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [text, setText] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch("/api/contactEmailHandler", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				text: text,
			}),
		});
		const data = await res.json();
		console.log(data);
		if (data.succes) {
			alert("sent email");
			setName("");
			setEmail("");
			setText("");
		} else {
			alert("failed to send email");
		}
	};
	return (
		<section className='contactForm-container'>
			<h1 className='title'>CONTACT ME</h1>
			<div className='formContainer'>
				<form onSubmit={(e) => handleSubmit(e)} className='form'>
					<label>YOUR NAME</label>
					<input
						type='text'
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
					/>
					<label>YOUR EMAIL</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type='email'
						required
					/>
					<label>MESSAGE</label>
					<textarea
						value={text}
						onChange={(e) => setText(e.target.value)}
						required
					/>
					<button className='send' type='submit'>
						SEND
					</button>
				</form>
			</div>
			<style jsx>{`
				.contactForm-container {
					padding-top: 50px;
				}
				.title {
					text-align: center;
					color: #ff5722;
				}
				.formContainer {
					width: 100%;

					display: flex;
					justify-content: center;
					align-items: center;
				}
				.form {
					flex: 0 1 500px;
					display: flex;
					flex-direction: column;
					padding: 20px;
					padding-top: 0;
				}
				input {
					border: 1px solid #ffeb3b;
					border-radius: 8px;
					height: 30px;
					padding: 5px;
				}
				textarea {
					border: 1px solid #ffeb3b;
					border-radius: 8px;
					height: 200px;
					padding: 5px;
				}
				label {
					font-size: 25px;
					padding-bottom: 10px;
					color: #ff5722;
				}
				.send {
					width: 150px;
					font-size: 25px;
					margin: 10px;
					color: #ff5722;
					background-color: white;
					border: 1px solid #ffeb3b;
					border-radius: 8px;
					margin-top: 20px;
					align-self: center;
				}
			`}</style>
		</section>
	);
};

export default Contactform;
