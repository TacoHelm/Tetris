import { Block } from './block'

const block = new Block()

test('Constructor is array', () => {
  expect(block.position).toBeInstanceOf(Array)
})
test('Constructor has length 4', () => {
  expect(block.position.length).toBe(4)
})
test('Translate Down', () => {
  expect(
    block.translateDown([
      [1, 1],
      [2, 3]
    ])
  ).toEqual([
    [2, 1],
    [3, 3]
  ])
})
test('Translate Left', () => {
  expect(
    block.translateLeft([
      [1, 1],
      [2, 3]
    ])
  ).toEqual([
    [1, 0],
    [2, 2]
  ])
})
test('Translate Right', () => {
  expect(
    block.translateRight([
      [1, 1],
      [2, 3]
    ])
  ).toEqual([
    [1, 2],
    [2, 4]
  ])
})
test('Translate Rotate', () => {
  expect(
    block.translateRotate([
      [0, 0],
      [0, 1],
      [1, 1],
      [0, 2]
    ])
  ).toEqual([
    [-1, 1],
    [0, 1],
    [0, 0],
    [1, 1]
  ])
})

