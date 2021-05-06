import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api'

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  // const submit = async (e: SyntheticEvent) => {
  //   e.preventDefault()

  // const response = await fetch('http://localhost:8080/api/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password })
  // })

  // const httpStatus = response.status

  // if (httpStatus === 200) {
  //   console.log('login to home')
  //   setRedirect(true)
  // } else {
  //   response.json().then((error) => alert(error.message.toString()))
  // }
  // })

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await axios({
      method: 'post',
      url: `${apiUrl}/login`,
      data: JSON.stringify({ email, password }),
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .then((res) => {
        // console.log(res.status)
        setRedirect(true)
        props.setName('Waiting...')
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input
        type="email"
        className="form-control"
        placeholder="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  )
}

export default Login
