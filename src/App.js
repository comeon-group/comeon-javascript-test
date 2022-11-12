import "./App.css"

import * as React from "react"

import { Login } from "./login"
import { Home } from "./home"

function App() {
  const user = localStorage.getItem("user")

  if (!user) {
    return <Login />
  }

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
