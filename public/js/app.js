/* global history, fetch */
import renderLogin from './renderLogin.js'
import renderCasino from './renderCasino.js'

const currentState = history.state || {}

if (!currentState.categories) {
  fetch(`${window.API_HOST}/categories`)
    .then(response => response.json())
    .then(categories => {
      history.replaceState({
        ...history.state,
        categories,
        activeCategory: 0
      }, 'init')
    })
}
if (!currentState.games) {
  fetch(`${window.API_HOST}/games`)
    .then(response => response.json())
    .then(games => {
      history.replaceState({
        ...history.state,
        games
      }, 'init')
    })
}

if (currentState.player) {
  renderCasino()
} else {
  renderLogin()
}
