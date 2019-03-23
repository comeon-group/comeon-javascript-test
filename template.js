const Purgecss = require('purgecss')
const fs = require('fs')

const API_HOST = process.env.API_HOST || 'http://localhost:3000'

const purgecss = new Purgecss({
  content: ['index.html', 'public/js/*.js', 'public/lib/*.js'],
  css: ['stylesheets/semantic.css', 'stylesheets/styles.css'],
  keyframes: true
})
const purgecssResult = purgecss.purge()

function minimizeData (_content) {
  let content = _content.toString()
  content = content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
  // now all comments, newlines and tabs have been removed
  content = content.replace(/ {2,}/g, ' ')
  // now there are no more than single adjacent spaces left
  content = content.replace(/ ([{:}]) /g, '$1')
  content = content.replace(/([;,]) /g, '$1')
  content = content.replace(/ !/g, '!')
  return content
}

const html = fs.readFileSync('./index.html').toString()
const [preStyles, postStyles] = html.split('<!-- Head -->')

module.exports = `${preStyles}
<link rel="prefetch" href="${API_HOST}/categories" as="fetch"/>
<link rel="prefetch" href="${API_HOST}/games" as="fetch"/>
<script>window.API_HOST = '${API_HOST}'</script>
<style>${purgecssResult.map(file => minimizeData(file.css)).join('\n')}</style>
${postStyles}`
