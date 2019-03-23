export default (parentNode, templateId, populate) => {
  const template = document.getElementById(templateId)
  const clone = document.importNode(template.content, true)
  populate(clone)
  parentNode.appendChild(clone)
}
