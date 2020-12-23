import React, { useContext, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from './authContext'

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    context.authenticate(userName, password)
  }

  const { from } = props.location.state || { from: { pathname: "/" } }

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />
  }
  return (
    <>
      <h2>Login Page</h2>
      <p>You must log in to view the protected pages</p>
      <input id="username" type="text" placeholder="user name" onChange={e => {
        setUserName(e.target.value)
      }} /><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value)
      }} />
      <button onClick={login}>Log in</button>
      <p>Not Registered?
        <Link to="signup">Sign up!</Link>
      </p>
    </>
  )
}

export default LoginPage;