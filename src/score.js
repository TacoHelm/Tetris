import { scoreUI } from './scoreUI'

const score = {}
let points = 0

score.add = function () {
  points++
  scoreUI.display(points)
}

export { score }
