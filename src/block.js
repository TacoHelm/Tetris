import { getRandom } from './allblocks'
import { grid } from './grid'
import { position } from './blockPosArray'
import { game } from './game'
import { color } from './color'

const block = {}

block.newBlock = function () {
  color.change()
  const attempt = position.set(getRandom().map(([row, col]) => [row, col + 6]), false) // False prevents the fields of settled block to get class empty
  if (attempt === false) game.end()
}

block.moveDown = function () {
  return position.set(position.get().map(([row, col]) => [row + 1, col])) // returns false to downInterval if unsuccesful
}

block.moveLeft = function () {
  position.set(position.get().map(([row, col]) => [row, col - 1]))
}

block.moveRight = function () {
  position.set(position.get().map(([row, col]) => [row, col + 1]))
}

block.rotate = function () {
  const pos = position.get()
  const [refRow, refCol] = pos[1] // Prevents rotation of black outside of grid
  position.set(pos.map(([row, col]) => [(refRow - (refCol - col)), (refCol + (refRow - row))]))
}

block.downInterval = function () {
  const attempt = block.moveDown()
  if (attempt === false) {
    grid.settleBlock(position.get())
    block.newBlock()
  }
}

export { block }
