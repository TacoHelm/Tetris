const keyboard = {}
import { block } from './block'

keyboard.init = function () {
    document.addEventListener('keydown', (evt) => keyDown(evt))
}

function keyDown (evt) {
    if (evt.keyCode === 37) block.moveLeft()
    if (evt.keyCode === 38) block.rotate()
    if (evt.keyCode === 39) block.moveRight()
    if (evt.keyCode === 40) block.moveDown()
}

export { keyboard }