import {
  clone,
  generateRandomState,
  getNeighborsNumber,
  getNextState,
} from './utils'


jest.mock('./constants', () => ({
  get COLUMNS () {
    return 2
  },
  get ROWS () {
    return 2
  }
}))

let globalMath: any = null


beforeAll(() => {
  const mockMath = Object.create(global.Math)
  mockMath.random = () => 1.0
  globalMath = global.Math
  global.Math = mockMath
})


afterAll(() => {
  global.Math = globalMath
})


describe('utils module', () => {
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
    expect(getNeighborsNumber(1, 1, grid)).toEqual(3)
    expect(getNeighborsNumber(1, 2, grid)).toEqual(3)
    expect(getNeighborsNumber(2, 1, grid)).toEqual(3)
    expect(getNeighborsNumber(2, 2, grid)).toEqual(3)
  })

  test('generate random state for 2x2 matrix', () => {
    expect(generateRandomState()).toEqual([[1, 1], [1, 1]])
  })

  test('get next state: 3 to 4 case', () => {
    const initState = [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
    const nextState = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
    expect(getNextState(initState)).toEqual(nextState)
  })
})
