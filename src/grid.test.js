import { Grid } from './grid'

const board = new Grid()

// Constructor
test('Constructor is Array', () => {
  expect(board.fields).toBeInstanceOf(Array)
})
test('Constructor is double Array', () => {
  expect(board.fields[0]).toBeInstanceOf(Array)
})
test('Empty set', () => {
  expect(board.fields[1][1]).toBe('empty')
})
test('Border side set', () => {
  expect(board.fields[0][0]).toBe('border')
})
test('Border bottom set', () => {
  expect(board.fields[board.fields.length - 1]).not.toContain('empty')
})
test('Border bottom equals length other rows', () => {
  expect(board.fields[board.fields.length - 1].length).toEqual(
    board.fields[board.fields.length - 2].length
  )
})
// isEmpty
test('Mid grid', () => {
  expect(
    board.testEmpty([
      [4, 4],
      [5, 5],
      [6, 6]
    ])
  ).toBe(true)
})
test('Bottom of grid', () => {
  expect(
    board.testEmpty([
      [board.fields.length - 1, 5],
      [4, 4]
    ])
  ).toBe(false)
})
test('Side of grid', () => {
  expect(
    board.testEmpty([
      [5, 0],
      [5, 1]
    ])
  ).toBe(false)
})
