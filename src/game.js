import { block } from "./block";

const game = {}
let timer = 0


game.start = function (){
  timer = setInterval(block.downInterval, 400)
}

game.end = function (){
  clearInterval(timer)
  console.log('End')
}

export { game }