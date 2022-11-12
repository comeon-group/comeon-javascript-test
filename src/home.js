import * as React from "react"
import * as Components from "./Components"

export function Home() {
  const [games, setGames] = React.useState()

  React.useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

  console.log(games)

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
      <Components.Button
        onClick={() => window.comeon?.game?.launch("starburst")}
        id="game-launch"
      >
        Test
      </Components.Button>
    </Components.Container>
  )
}

export default Home
