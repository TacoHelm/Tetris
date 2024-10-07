import { scoreUI } from "./scoreUI"

let score = {}
let points = 0

score.add = function() {
  points++
  scoreUI.display(points)
}

export { score }


