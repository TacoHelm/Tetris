import { getRandom } from './allblocks'

test('isArray', () => {
  expect(getRandom()).toBeInstanceOf(Array)
})
test('Array length 4', () => {
  expect(getRandom()).toHaveLength(4)
})
