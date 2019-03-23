/* global history, fetch, FormData */
import render from './render.js'
import renderCasino from './renderCasino.js'

export default () => {
  const parentNode = document.getElementById('main-container')
  const attachLoginEvent = (node) => {
    const loginForm = (node || document).getElementById('login-form')
    loginForm.onsubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(loginForm)
      const username = formData.get('username')
      fetch(`${window.API_HOST}/login`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password: formData.get('password')
        })
      }
      )
        .then(response => response.json())
        .then(jsonResponse => {
          const { status, player, error } = jsonResponse
          if (status === 'success') {
            history.replaceState({
              ...history.state,
              player: {
                username,
                ...player
              }
            }, 'login')
            renderCasino()
          } else {
            throw new Error(error)
          }
        })
        .catch(error => {
          const usernameInput = loginForm.elements.namedItem('username')
          usernameInput.setCustomValidity(error)
          loginForm.reportValidity()
          loginForm.reset()
          usernameInput.oninput = () => usernameInput.setCustomValidity('')
        })
    }
  }
  parentNode.innerHTML = ''
  render(parentNode, 'login', attachLoginEvent)
}
