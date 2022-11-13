import * as React from "react"
import { toast } from "react-toastify"
import * as Components from "./Components"

async function loginUser(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json())
}

export function Login() {
  const [username, setUserName] = React.useState()
  const [password, setPassword] = React.useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await loginUser({
      username,
      password,
    }).then((res) => {
      if (res.status === "success") {
        localStorage.setItem("user", JSON.stringify(res.player))
        window.location.href = "/"
      } else {
        toast.error(res.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    })
  }

  return (
    <Components.Container align="center">
      <Components.Box css={{ paddingTop: "20px" }}>
        <form noValidate onSubmit={handleSubmit}>
          <Components.Input
            size="large"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Components.Input
            size="large"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button size="large" bg="primary">
            Login
          </Components.Button>
        </form>
      </Components.Box>
    </Components.Container>
  )
}

export default Login
