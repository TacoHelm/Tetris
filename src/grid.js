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
    this.checkFullRows()
  }

  checkFullRows() {
    this.fields.forEach((row, index) => {
      let noEmpty = true;
      let containsBlock = false;
      for (const field of row){
        if (field === 'empty') noEmpty = false
        if (field === 'block') containsBlock = true        
      }
      if (noEmpty === true && containsBlock === true) this.clearRow(index)     
    })
  }

  clearRow(index) {   
    for (let row = index; row > 0; row--){
      for (let col = 0; col < this.fields[row].length; col++){
        this.fields[row][col] = this.fields[(row - 1)][col]
      }
    }
    gridUI.redraw()
  }
}
