import './style.css'
import { grid } from './grid'
import { block } from './block'
import { gridUI } from './gridUI'
import { keyboard } from './keyboard'
import { gridArray } from './gridArray'

gridArray.init()
gridUI.init()
keyboard.init()
block.newBlock()
block.start()

export { grid }
