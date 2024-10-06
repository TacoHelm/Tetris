import { getRandom } from './allblocks'
import { grid } from './grid'
import { position } from './blockPosArray'

const block = {}

block.newBlock = function () {
  position.set(translateMid(getRandom()), false)
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
  const [refRow, refCol] = arr[1] //  Sets the second field in array as rotation point
  const newArr = arr.map(([row, col]) => {
    const newRow = refRow - (refCol - col)
    const newCol = refCol + (refRow - row)
    return [newRow, newCol]
  })
  return newArr
}

function translateMid (arr) { // Todo: Fetch grid width and incorporate in function
  return arr.map(([row, col]) => [row, col + 6])
}

block.moveDown = function () {
  position.set(translateDown(position.get()), true)
}

block.moveLeft = function () {
  position.set(translateLeft(position.get()), true)
}

block.moveRight = function () {
  position.set(translateRight(position.get()), true)
}

block.rotate = function () {
  position.set(translateRotate(position.get()), true)
}

function downInterval () {
  const newPos = translateDown(position.get())
  if (grid.testEmpty(newPos) === false) {
    grid.settleBlock(position.get())
    block.newBlock()
  }
  block.moveDown()
}

block.start = function () {
  setInterval(downInterval, 400)
}

export { block }
