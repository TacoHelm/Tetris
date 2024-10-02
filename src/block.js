import { getRandom } from './allblocks'
import { gridUI } from './gridUI'
import { grid } from './index'


const block = {}
const position = (function () {
  const pos = []
  function get(){
    return pos
  }
  function set(newArr){
    if (grid.testEmpty(newArr) === true){
     positionSetCallBack (pos, newArr)
     while (pos.length > 0){
        pos.pop()
      }
      newArr.forEach(element => {
        pos.push(element)
      });
    }
  }
  return { get, set }
})()


function positionSetCallBack (oldArr, newArr) {   // Executes when position changes
  console.log(position.get())
  gridUI.moveBlock(oldArr, newArr)
}
block.newBlock = function () {
  position.set(translateMid(getRandom())) 
}
  
function translateDown (arr) {
  return arr.map(([row, col]) => [row + 1, col])
}

function translateLeft (arr) {
  return arr.map(([row, col]) => [row, col - 1])
}

function translateRight (arr) {
  return arr.map(([row, col]) => [row, col + 1])
}

function translateRotate (arr) {
  return arr.map(([row, col]) => [col - 1, 1 - row])
}

function translateMid (arr) {   // Todo: Fetch grid width and incorporate in function
  return arr.map(([row, col]) => [row, col + 6])
}

block.moveDown = function () {
  position.set(translateDown(position.get()))  
}

block.moveLeft = function () {
  position.set(translateLeft(position.get())) 
}

block.moveRight = function () {
  position.set(translateRight(position.get())) 
}

block.rotate = function () {
  position.set(translateRotate(position.get())) 
}

function downInterval () {
  block.moveDown()
  const newPos = translateDown(position.get())
  if (grid.testEmpty(newPos) === false) {
    grid.settleBlock(position.get())
    block.newBlock()
  }
}

block.start = function () {
  setInterval(downInterval, 400)
}

export { block }

