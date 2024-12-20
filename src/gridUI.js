import { newDiv } from './DOMhelper'
import { grid } from './grid'
import { gridArray } from './gridArray'

const fields = []
const gridUI = {}
const main = document.querySelector('.main')
const gridContainer = newDiv(main, ['grid-container'])

gridUI.init = function () {
  const data = gridArray.get()
  for (let row = 0; row < data.length; row++) {
    fields.push([])
    for (let col = 0; col < data[0].length; col++) {
      const div = newDiv(gridContainer, ['field', data[row][col]])
      fields[row].push(div)
    }
  }
}
gridUI.redraw = function () {
  const data = grid.getFields()
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[0].length; col++) {
      fields[row][col].classList.remove(...fields[row][col].classList)
      fields[row][col].classList.add('field', data[row][col])
    }
  }
}
gridUI.setField = function (row, col, string) {
  fields[row][col].classList.remove(...fields[row][col].classList)
  fields[row][col].classList.add('field', string)
}

gridUI.setArray = function (arr, string) {
  arr.forEach(([row, col]) => {
    gridUI.setField(row, col, string)
  })
}

export { gridUI }
