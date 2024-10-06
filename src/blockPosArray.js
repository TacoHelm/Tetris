import { grid } from './grid'
import { gridUI } from './gridUI'

const position = {}
const pos = []

position.get = function () {
  return pos
}

position.set = function (newArr, setOldEmpty) {
  if (grid.testEmpty(newArr) === true) {
    if (setOldEmpty === true) gridUI.setArray(pos, 'empty')
    gridUI.setArray(newArr, 'active')
    while (pos.length > 0) {
      pos.pop()
    }
    newArr.forEach(element => {
      pos.push(element)
    })
  }
  if (grid.testEmpty(newArr) === false) return false
}

export { position }
