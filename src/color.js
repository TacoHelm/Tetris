const color = {}
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink']
let index = 0

color.get = function () {
  return colors[index]
}

color.change = function () {
  index = Math.floor(Math.random() * colors.length)
}

export { color }
