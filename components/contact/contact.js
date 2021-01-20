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
		if (data.Accept) {
			alert("sent email");
		} else {
			alert("failed to send email");
		}
	};
	return (
		<>
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
					<textarea onChange={(e) => setText(e.target.value)} required />
					<button className='send' type='submit'>
						SEND
					</button>
				</form>
			</div>
			<style jsx>{`
				.title {
					text-align: center;
					color: blue;
					margin-top: 50px;
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
					border: 1px solid blue;
					border-radius: 8px;
					height: 30px;
					padding: 5px;
				}
				textarea {
					border: 1px solid blue;
					border-radius: 8px;
					height: 200px;
					padding: 5px;
				}
				label {
					font-size: 25px;
					padding-bottom: 10px;
					color: #595c5d;
				}
				.send {
					width: 150px;
					font-size: 25px;
					margin: 10px;
					color: blue;
					border: 1px solid blue;
					border-radius: 8px;
					margin-top: 20px;
					align-self: center;
				}
			`}</style>
		</>
	);
};

export default Contactform;
