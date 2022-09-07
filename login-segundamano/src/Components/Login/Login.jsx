import React, { useState } from "react";
import { users } from "../../data.js";
import { validate } from "../../Controllers/ValidateLogin.js";
// import { useModal } from "../Modals/useModal/useModal";
import "./login.css";


const Login = () => {
	const [input, setInput] = useState({
		username: "",
		password: "",
	});
	// const [isOpenModalLogin, openModalLogin, closeModalLogin] = useModal(false)
    // const [isOpenModalRegister, openModalRegister, closeModalRegister] = useModal(false)
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
	const handleSubmit = (e) => {
		let userValidate = users.find((e) => e.username === input.username);
		console.log(userValidate.username);
		e.preventDefault();
		// if (validate()) {
		// 	alert(input.password);
		// }
		if (
			userValidate.username === input.username &&
			userValidate.password === input.password
		) {
			alert("Hello " + userValidate.username);
		} else {
			console.log(input.username);
			alert("Invalid User");
		}
	};

	return (
		<div className="containerLogin">
			<div className="formContainer">
				<div className="titleLogin">Iniciar Sesión</div>
				<form className="formLogin" onSubmit={handleSubmit}>
					<div className="user">
						<input
							className={errors.username && "dangerLogin"}
							type="text"
							name="username"
							onChange={handleInputChange}
							value={input.username}
							placeholder="Type User"
							required
						/>
						{errors.username && <p className="dangerLogin">{errors.username}</p>}
					</div>
					<div className="password">
						<input
							className={errors.password && "dangerPswd"}
							type="password"
							name="password"
							onChange={handleInputChange}
							value={input.password}
							placeholder="Type Password"
							required
						/>
						{errors.password && <p className="dangerPswd">{errors.password}</p>}
					</div>
					<button className="btnSubmit" type="submit">
						Entra
					</button>
				</form>
			</div>
			<div className="footerLogin">
				¿No tienes cuenta?<span className='newAccount' >Crea una nueva</span>
			</div>
		</div>
	);
};

export default Login;
