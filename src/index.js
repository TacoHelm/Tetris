import './style.css'
import { Grid } from './grid'
import { block } from './block'
import { gridUI } from './gridUI'
import { keyboard } from './keyboard'


const grid = new Grid()
gridUI.init()
keyboard.init()
block.newBlock()
block.start()

export { grid }


