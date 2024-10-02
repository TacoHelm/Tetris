import { gridUI } from "./gridUI"

export class Grid {
  constructor () {
    // Double array fields[row][col] with side cols and bottom row set to 'border' and rest set to 'empty'
    this.fields = []
    for (let row = 0; row < 25; row++) {
      const rowArr = ['border']
      for (let col = 0; col < 13; col++) {
        rowArr.push('empty')
      }
      rowArr.push('border')
      this.fields.push(rowArr)
    }
    const lastRow = []
    for (let i = 0; i < this.fields[0].length; i++) {
      lastRow.push('border')
    }
    this.fields.push(lastRow)
  }

  testEmpty (arr) {
    let result = true
    arr.forEach(([row, col]) => {
      if (this.fields[row][col] === 'border' || this.fields[row][col] === 'block') result = false
    })
    return result
  }

  getFields() {
    return this.fields
  }

  settleBlock(arr) {
    arr.forEach(([row, col]) => {
      this.fields[row][col] = 'block'
    })  
    gridUI.settleBlock(arr)
  }
}
