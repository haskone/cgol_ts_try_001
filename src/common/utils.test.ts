import {
  clone,
  getNeighborsNumber,
} from './utils'


test('clone non-empty array of arrays', () => {
  const arr1 = [[1, 2, 3]]
  const arr2 = clone(arr1)
  arr1[0][0] = 100500
  expect(arr2.sort()).toEqual([[1, 2, 3]].sort())
})


test('get neighbors for a 4x4 matrix with 2x2 live cells', () => {
  const grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(getNeighborsNumber(1, 1, grid) === 3)
  expect(getNeighborsNumber(1, 2, grid) === 3)
  expect(getNeighborsNumber(2, 1, grid) === 3)
  expect(getNeighborsNumber(2, 2, grid) === 3)
})
