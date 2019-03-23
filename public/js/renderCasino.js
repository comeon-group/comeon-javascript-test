/* global history, fetch */
import render from './render.js'
import renderLogin from './renderLogin.js'
import renderGame from './renderGame.js'

const renderPlayerInfo = (node) => {
  const { player } = history.state
  const parentNode = node.getElementById('player-list')
  const populatePlayerInfo = (node) => {
    const { avatar, name, event } = player
    node.querySelector('.avatar').src = avatar
    node.querySelector('.name').textContent = name
    node.querySelector('.event').textContent = event
  }
  parentNode.innerHTML = ''
  render(parentNode, 'player-info', populatePlayerInfo)
}

const renderGames = (node) => {
  const { games, activeCategory, searchString } = history.state
  const parentNode = (node || document).getElementById('game-item-list')
  const populateGameItem = (game) => (node) => {
    const { icon, name, description, code } = game
    node.querySelector('img').src = icon
    node.querySelector('.name').textContent = name
    node.querySelector('.description').textContent = description
    node.getElementById('launch-game').onclick = () => {
      renderGame()
      window.comeon.game.launch(code)
    }
  }
  parentNode.innerHTML = ''
  games.forEach((game) => {
    if ((!activeCategory || game.categoryIds.indexOf(activeCategory) > -1) &&
    (!searchString || game.name.toUpperCase().includes(searchString.toUpperCase()))) {
      render(parentNode, 'game-item', populateGameItem(game))
    }
  })
}

const renderCategories = (node) => {
  const { categories, activeCategory } = history.state
  const parentNode = (node || document).getElementById('category-item-list')
  const populateCategoryItem = (category) => (node) => {
    const { id, name } = category
    const categoryItem = node.querySelector('.item')
    if (activeCategory === id) categoryItem.classList.add('selected')
    node.querySelector('.header').textContent = name
    categoryItem.onclick = () => {
      if (history.state.activeCategory === id) {
        return
      }
      history.replaceState({
        ...history.state,
        activeCategory: id
      }, 'casino')
      renderGames()
      for (let i = 0; i < categoryItem.parentNode.children.length; i++) {
        if (categoryItem.parentNode.children[i] === categoryItem) {
          categoryItem.classList.add('selected')
        } else {
          categoryItem.parentNode.children[i].classList.remove('selected')
        }
      }
    }
  }
  parentNode.innerHTML = ''
  categories.forEach((category) => {
    render(parentNode, 'category-item', populateCategoryItem(category))
  })
}

export default () => {
  const parentNode = document.getElementById('main-container')
  const populateCategoryAndGames = (node) => {
    const searchInput = node.getElementById('search')
    const logoutButton = node.getElementById('logout')
    searchInput.onkeyup = (event) => {
      history.replaceState({
        ...history.state,
        searchString: event.target.value
      }, 'casino')
      renderGames()
    }
    logoutButton.onclick = (event) => {
      event.preventDefault()
      fetch(`${window.API_HOST}/logout`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: history.state.player.username
        })
      }
      )
        .then(response => response.json())
        .then(jsonResponse => {
          const { status, error } = jsonResponse
          if (status === 'success') {
            history.replaceState({
              ...history.state,
              player: null
            }, 'logout')
            renderLogin()
          } else {
            throw new Error(error)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
    renderPlayerInfo(node)
    renderGames(node)
    renderCategories(node)
  }
  parentNode.innerHTML = ''
  render(parentNode, 'casino', populateCategoryAndGames)
}
