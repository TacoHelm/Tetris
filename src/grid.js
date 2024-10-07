import { gridArray } from './gridArray'
import { gridUI } from './gridUI'

const grid = {}

grid.testEmpty = function (arr) {
  let result = true
  const fields = gridArray.get()
  arr.forEach(([row, col]) => {
    if (row < 0) { // Prevents rotation of black outside of grid
      result = false
      return
    }  
    if (fields[row][col] === 'border' || fields[row][col] === 'block') result = false
  })
  return result
}
grid.getFields = function () {
  return gridArray.get()
}

grid.settleBlock = function (arr) {
  gridArray.set(arr, 'block')
  checkFullRows()
}

function checkFullRows () {
  const fields = gridArray.get()
  fields.forEach((row, index) => {
    let noEmpty = true
    let containsBlock = false
    for (const field of row) {
      if (field === 'empty') noEmpty = false
      if (field === 'block') containsBlock = true
    }
    if (noEmpty === true && containsBlock === true) clearRow(index)
  })
}

function clearRow (index) {
  const fields = gridArray.get()
  for (let row = index; row > 0; row--) {
    for (let col = 0; col < fields[row].length; col++) {
      const arr = []
      arr.push([row, col])
      gridArray.set(arr, fields[(row - 1)][col])
    }
  }
  gridUI.redraw()
}

export { grid }
