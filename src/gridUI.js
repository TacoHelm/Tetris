import { newDiv } from './DOMhelper'
import { grid } from '.'

const fields = []
const gridUI = {}



gridUI.init = function () {
  const main = document.querySelector('.main')
  const gridContainer = newDiv(main, ['grid-container'])
  const data = grid.getFields()
  for (let row = 0; row < data.length; row++){
    fields.push([])
    for (let col = 0; col < data[0].length; col++){
      const div = newDiv(gridContainer, ['field', data[row][col]])
      fields[row].push(div)
    }    
  }   // To do: export nr of rows and cols to css
}
gridUI.moveBlock = function (oldPositions, newPositions){
  oldPositions.forEach(([row, col]) => {
    fields[row][col].classList.replace('active', 'empty')
  });
  newPositions.forEach(([row, col]) => {
    fields[row][col].classList.replace('empty', 'active')
  })
}
gridUI.settleBlock = function (arr){
  arr.forEach(([row, col]) => {
    fields[row][col].classList.add('block')
    fields[row][col].classList.remove('active', 'empty')
  })
}


export { gridUI }
