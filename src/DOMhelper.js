export function newDiv (parent, classList) {
  const div = parent.appendChild(document.createElement('div'))
  classList.forEach((element) => {
    div.classList.add(element)
  })
  return div
}
