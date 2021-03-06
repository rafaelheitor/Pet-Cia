import React, { useState } from "react"
import { Link } from "react-router-dom"
import { login } from "../../services/usuarios"
import logo from "../../img/paw-solid.svg"
import "./style.css"
import { ToastContainer } from "react-toastify"

export default function Login() {
  const [usuarioForm, setUsuarioForm] = useState({ email: "", senha: "" })

  function handleChange(event) {
    const { name, value } = event.target

    setUsuarioForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const postUsuario = async (event) => {
    event.preventDefault()
    await login({
      email: usuarioForm.email,
      senha: usuarioForm.senha,
    })
    window.location = "/"
  }

  return (
    <main className='login'>
      <div className='login-container'>
        <ToastContainer />
        <div className='head-login'>
          <Link to='/'>
            <h1>Pet & Cia </h1>
            <img src={logo} alt='logo' />
            <h3>Acesse Sua conta</h3>
          </Link>
        </div>
        <form>
          <div className='controle-form'>
            <label htmlFor='email'>Digite seu Email</label>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={usuarioForm.email}
              onChange={handleChange}
            />
          </div>
          <div className='controle-form'>
            <label htmlFor='senha'>Digite sua senha</label>
            <input
              type='password'
              placeholder='Senha'
              name='senha'
              value={usuarioForm.senha}
              onChange={handleChange}
            />
          </div>
          <button className='btn' type='submit' onClick={postUsuario}>
            Entrar
          </button>
        </form>
        <p>Ainda não tem registro?</p>
        <Link to='/registro'>Registre-se</Link>
      </div>
    </main>
  )
}
