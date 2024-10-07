import { gridUI } from './gridUI'

const fields = []
const rows = 20
const cols = 12
const gridArray = {}

gridArray.init = function () {
  for (let row = 0; row < (rows - 1); row++) {
    const rowArr = ['border']
    for (let col = 0; col < (cols - 2); col++) {
      rowArr.push('empty')
    }
    rowArr.push('border')
    fields.push(rowArr)
  }
  const lastRow = []
  for (let i = 0; i < cols; i++) {
    lastRow.push('border')
  }
  fields.push(lastRow)
}

gridArray.set = function (arr, string) {
  for (const [row, col] of arr) {
    fields[row][col] = string
    gridUI.setField(row, col, string)
  }
}

gridArray.get = function () {
  return fields
}

export { gridArray }
