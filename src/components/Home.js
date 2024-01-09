import * as React from "react"
import * as Components from "./ComponentsStyle"
import GameContainer from "./GameContainer"
import eric from "../../mock/images/avatar/eric.jpg"


const Home = ()=> {
  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  return (
    <Components.Container>
      <Components.Navbar bg="primary">
        <Components.Box css={{ flexDirection: "row" }}>
          <Components.Avatar
            size="sm"
            src={eric}
            css={{ borderRadius: "50%" }}
          />
          <Components.Box css={{ flexDirection: "column", paddingLeft: "4px" }}>
            <Components.Box
              css={{
                fontSize: "14px",
                fontWeight: "700",
                paddingBottom: "2px",
              }}
            >
              {user.name}
            </Components.Box>
            <Components.Box css={{ fontSize: "12px" }}>
              {user.event}
            </Components.Box>
          </Components.Box>
        </Components.Box>
        <Components.Button bg="primary" size="sm" onClick={handleLogout}>
          LOG OUT
        </Components.Button>
      </Components.Navbar>
      <GameContainer />
    </Components.Container>
  )
}

export default Home