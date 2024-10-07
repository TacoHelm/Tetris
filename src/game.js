import { block } from './block'

const game = {}
let timer = 0
let speed = 400

game.start = function () {
  console.log(speed)
  timer = setInterval(block.downInterval, speed)
}

game.end = function () {
  console.log('End')
  clearInterval(timer)
}

game.speedUp = function () {
  speed = Math.floor(speed * .98)
  clearInterval(timer)
  game.start()
}

export { game }
