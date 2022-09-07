import React, { useState } from "react";
import { validate } from "../../Controllers/ValidateRegister.js";
import { users } from "../../data.js";
import './register.css'

const Register = ({setLogin}) => {
	const [input, setInput] = useState({
		username: "",
		password: "",
		password2: "",
	});
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};
	//const userVal = users.find((e) => e.username === input.username);
	const handleSubmit = (e) => {
		e.preventDefault();
		let user = users.find((e) => e.username === input.username);		
		if (user) {
			alert("The user alredy exist");
		} else if (input.password !== input.password2) {
			alert("Passwords don't match");
		} else {
			// console.log("Son diferentes");
			users.push({ username: input.username, password: input.password });
			// console.log(users);
			alert("User registered succesfully");
			setInput({
				username: "",
				password: "",
				password2: "",
			});
		}
	};

	return (
		<div className="containerRegister">
			<div className="formContainer">
				<form className="formRegister" onSubmit={handleSubmit}>
				<div className="titleLoginReg">Crea una cuenta</div>
					<div className="user">
						<input
							className={errors.username && "danger"}
							type="text"
							name="username"
							onChange={handleInputChange}
							value={input.username}
							required
							placeholder="Type username"
						/>
					</div>
						{errors.username && <p className="danger">{errors.username}</p>}
					<div className="password pswdReg">
						<input
							className={errors.password && "danger"}
							type="password"
							name="password"
							onChange={handleInputChange}
							value={input.password}
							required
							placeholder="Type password"
						/>
					</div>
						{errors.password && <p className="danger">{errors.password}</p>}
					<div className="passwordRegister">
						<input
							className={errors.password2 && "danger"}
							type="password"
							name="password2"
							onChange={handleInputChange}
							value={input.match}
							required
							placeholder="Re-Type password"
						/>
						{errors.match && <p className="danger">{errors.match}</p>}
					</div>
					<button className="btnSubmitReg" type="submit" >
						Crea una Cuenta
					</button>
				</form>
			</div>
			<div className="footerLogin">
				¿Ya tienes cuenta? <span onClick={(e)=>{
					e.preventDefault()
					setLogin(true)
				}} className='newAccount' >Inicia sesión</span>
			</div>
		</div>
	);
};

export default Register;
