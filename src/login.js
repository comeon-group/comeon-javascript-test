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
          autoClose: 500,
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
    <Components.Container
      align="center"
      css={{
        paddingTop: "40px",
        width: "100%",
        height: "100%",
      }}
    >
      <Components.Box
        css={{
          padding: "35px",
          border: "solid 2px #8EB50D",
          flexDirection: "column",
          backgroundColor: "grey",
        }}
      >
        <Components.Avatar align="center" size="large" src="/images/logo.svg" />
        <form noValidate onSubmit={handleSubmit}>
          <Components.Input
            size="sm"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Components.Input
            size="sm"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Box
            css={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "8px",
            }}
          >
            <Components.Button size="lg" bg="primary">
              Login
            </Components.Button>
          </Components.Box>
        </form>
      </Components.Box>
    </Components.Container>
  )
}

export default Login
