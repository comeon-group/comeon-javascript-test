import render from './render.js'
import renderCasino from './renderCasino.js'

export default () => {
  const parentNode = document.getElementById('main-container')
  const attachBackEvent = (node) => {
    node.getElementById('back-to-casino').onclick = renderCasino
  }
  parentNode.innerHTML = ''
  render(parentNode, 'ingame', attachBackEvent)
}
