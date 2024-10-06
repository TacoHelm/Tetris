import './style.css'
import { grid } from './grid'
import { block } from './block'
import { gridUI } from './gridUI'
import { keyboard } from './keyboard'
import { gridArray } from './gridArray'
import { game } from './game'


gridArray.init()
gridUI.init()
keyboard.init()
block.newBlock()
game.start()


