import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api'

const Nav = (props: { name: string; setName: (name: string) => void }) => {
  const logout = async () => {
    await axios
      .post(`${apiUrl}/logout`, {
        withCredentials: true
      })
      .then((res) => {
        props.setName('')
        console.log(res.data.message)
      })
  }

  let menu

  if (props.name === '') {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div>{menu}</div>
      </div>
    </nav>
  )
}

export default Nav
