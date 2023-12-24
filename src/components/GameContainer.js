import React, { useEffect, useState } from "react";
import * as Components from "./ComponentsStyle";
import feasting from "../../mock/images/game-icon/feasting_fox.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const GameContainer = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredGames, setFilteredGames] = useState(games);
  const [isShown, setIsShown] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const filterGames = (id) =>
    games.filter((game) => game.categoryIds.includes(id));

  const searchHandler = (e) => setSearchInput(e.target.value.toLowerCase());

  useEffect(() => {
    const filtered = games.filter((game) => {
      if (searchInput === "") {
        return game;
      }
      return game.name.toLowerCase().includes(searchInput);
    });
    setFilteredGames(filtered);
  }, [games, searchInput]);

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  return (
    <Components.Box>
      {isShown && (
        <>
          <Components.Box
            align="left"
            css={{
              padding: "10px",
              flex: "75%",
              flexDirection: "column",
            }}
          >
            <Components.Box
              css={{
                fontWeight: "700",
              }}
            >
              Games
            </Components.Box>

            {filteredGames.map((game) => (
              <Components.Box
                key={game.code}
                css={{
                  flexDirection: "column",
                  paddingTop: "8px",
                  width: "100%",
                  maxWidth: "700px",
                  "&:after": {
                    content: "",
                    border: "1px solid grey",
                    alignSelf: "stretch",
                  },
                }}
              >
                <Components.Box css={{ flexDirection: "row" }}>
                  <Components.Avatar
                    css={{
                      cursor: "pointer",
                    }}
                    size="lg"
                    src={feasting}
                  />
                  <Components.Box
                    css={{
                      paddingLeft: "4px",
                      flexDirection: "column",
                    }}
                  >
                    <Components.Box
                      css={{
                        fontWeight: "700",
                        justifyContent: "left",
                      }}
                    >
                      {game.name}
                    </Components.Box>
                    <Components.Box
                      css={{
                        fontWeight: "500",
                        fontSize: "10px",
                        textAlign: "start",
                      }}
                    >
                      {game.description}
                    </Components.Box>
                    <Components.Box
                      align="right"
                      css={{
                        paddingTop: "4px",
                        paddingBottom: "4px",
                      }}
                    >
                      <Components.Button
                        onClick={() => {
                          setIsShown(false);
                          window.comeon.game.launch(game.code);
                        }}
                        size="sm"
                        bg="primary"
                      >
                        <span>
                          Play <FontAwesomeIcon icon={faChevronRight} />{" "}
                        </span>
                      </Components.Button>
                    </Components.Box>
                  </Components.Box>
                </Components.Box>
              </Components.Box>
            ))}
          </Components.Box>

          <Components.Box
            css={{
              flexDirection: "column",
              flex: "25%",
              padding: "10px",
            }}
          >
            <Components.Box>
                <Components.Input
                  size="sm"
                  placeholder="Search Game"
                  onChange={searchHandler}
                  css={{ width: "100%" }}
                />
                {/* <FontAwesomeIcon icon={faSearch} /> */}
              
            </Components.Box>
            <Components.Box
              css={{
                flexDirection: "column",
                paddingBottom: "8px",
                fontWeight: "700",
                textAlign: "start",
                "&:after": {
                  content: "",
                  border: "1px solid grey",
                },
              }}
            >
              Categories
            </Components.Box>

            {categories.map((category) => (
              <Components.Box
                key={category.id}
                onClick={() => setFilteredGames(filterGames(category?.id))}
                css={{
                  fontWeight: "700",
                  cursor: "pointer",
                  paddingBottom: "4px",
                  textAlign: "start",
                }}
              >
                <nav
                  className="navbar is-primary"
                  role="navigation"
                  aria-label="main navigation"
                >
                  {" "}
                  {category?.name}
                </nav>
              </Components.Box>
            ))}
          </Components.Box>
        </>
      )}
      <Components.Box
        css={{
          width: "100%",
          display: !isShown ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        <Components.Box id="game-launch" />
        {!isShown && (
          <Components.Box
            onClick={() => {
              setIsShown(true);
              window.location.href = "/";
            }}
            css={{
              paddingTop: "20px",
              fontWeight: "700",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            BACK TO GAMES
          </Components.Box>
        )}
      </Components.Box>
    </Components.Box>
  );
};

export default GameContainer;
