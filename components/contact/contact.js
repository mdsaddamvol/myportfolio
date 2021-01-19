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
	};
	return (
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
				<button type='submit'>send</button>
			</form>
			<style jsx>{`
				.formContainer {
					width: 50%;
					height: 50vh;
					margin: 0 auto;
					padding: 100px;
				}
				.form {
					display: flex;
					flex-direction: column;
				}
			`}</style>
		</div>
	);
};

export default Contactform;
