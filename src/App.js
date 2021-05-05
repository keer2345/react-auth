import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <main className="form-signin">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
