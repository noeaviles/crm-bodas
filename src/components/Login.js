import React, { useState } from 'react';

const Login = () => {

    const [optionForm, setOptionForm] = useState(true);

  return (
      <>
        <div className='form-container'>
            <div className='login-box'>
                <h2>LOGO</h2>
                <div className='login-titles'>
                    <div className='login-titles-login' onClick={ () => setOptionForm(true) }>
                        <h3>Inicia sesión</h3>
                    </div>
                    <div className='login-titles-register' onClick={ () => setOptionForm(false) }>
                        <h3>Registrarme</h3>
                    </div>
                </div>
                { optionForm && (
                    <div className='login-form'>
                        <h2>Login</h2>
                        <div className="login-inputs">
                            <input type="text" name="usuario" placeholder="Usuario" required/>
                            <input type="password" name="password" placeholder="Password" required/>
                            <a href='#'><p>¿Olvidaste tu contraseña?</p></a>
                        </div>
                        <div>
                            
                        </div>
                        <div className='login-btn'>
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
                )}
                { !optionForm && (
                    <div className='register-form'>
                        <h2>Registro</h2>
                        <div className="register-inputs">
                            <input type="text" name="usuario" placeholder="Usuario" required/>
                            <input type="password" name="password" placeholder="Password" required/>
                            <a href='#'><p>¿Olvidaste tu contraseña?</p></a>
                        </div>
                        <div className='login-btn'>
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Login