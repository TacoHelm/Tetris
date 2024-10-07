import { block } from './block'

const game = {}
let timer = 0

game.start = function () {
  timer = setInterval(block.downInterval, 400)
}

game.end = function () {
  console.log('End')
  clearInterval(timer)
}

export { game }
