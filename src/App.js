import * as React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Login } from "./login"
import { Home } from "./home"

function App() {
  const user = localStorage.getItem("user")

  if (!user) {
    return (
      <>
        <Login />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </>
    )
  }

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
