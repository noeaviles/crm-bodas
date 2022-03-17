import React from 'react'

const Login = () => {
  return (
      <>
        <div className='login-fondo'>
            <div className='login-box'>
                <div className='form'>
                    <h2>Bienvenido</h2>
                    <div className="inputs_login">
                        <input type="text" name="usuario" placeholder="Usuario" required/>
                        <input type="text" name="password" placeholder="Password" required/>
                        <a src="#"><p>¿Olvidaste tu contraseña?</p></a>
                    </div>
                    <div className='btn_login'>
                        <input type="submit" value="Login"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login