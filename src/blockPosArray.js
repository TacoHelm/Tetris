import { grid } from './grid'
import { gridUI } from './gridUI'
import { color } from './color'

const position = {}
const pos = []

position.get = function () {
  return pos
}

position.set = function (newArr, setOldEmpty) {
  if (grid.testEmpty(newArr) === true) {
    if (setOldEmpty !== false) gridUI.setArray(pos, 'empty')
    gridUI.setArray(newArr, color.get())
    pos.splice(0, pos.length)
    newArr.forEach(element => pos.push(element))
  }
  if (grid.testEmpty(newArr) === false) return false
}

export { position }
