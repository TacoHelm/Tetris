const color = {}
const colors = ['red', 'blue', 'green', 'pink', 'orange', 'purple']
let index = 0

color.get = function () {
  return colors[index]
}

color.change = function () {
  index ++
  if (index >= colors.length) index = 0
}

export { color }
