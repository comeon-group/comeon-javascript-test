import * as React from "react"

import  Login  from "./components/Login"
import  Home  from "./components/Home"

const App = ()=> {
  const user = localStorage.getItem("user")
console.log('user',user)
 if (!user) {
    return (
        <Login />
    )
 }

  return (
    <div>
      <Home />
    </div>
  )
}

export default App