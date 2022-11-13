import * as React from "react"
import * as Components from "./Components"
import { GameContainer } from "./GameContainer"

export function Home() {
  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  return (
    <Components.Container>
      <Components.Navbar bg="primary">
        <Components.Avatar size="sm" src={user.avatar} />
        <Components.Button size="small" onClick={handleLogout}>
          LOG OUT
        </Components.Button>
      </Components.Navbar>
      <GameContainer />
    </Components.Container>
  )
}

export default Home
