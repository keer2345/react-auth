import './App.css'
import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api'

function App() {
  const [name, setName] = useState('')
  useEffect(() => {
    axios
      .get(`${apiUrl}/user`, {
        withCredentials: true
      })
      .then((res) => {
        setName(res.data.name)
        console.log(res)
      })
      .catch((err) => {
        console.log('err: ', err.response.data.message)
      })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className="form-signin">
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={() => <Login setName={setName} />} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
