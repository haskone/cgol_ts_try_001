import {
  COLUMNS,
  ROWS,
} from './constants'


export const clone = (
  items: Array<any>,
): Array<any> => items.map(
  (item: Array<number>) =>
    Array.isArray(item) ?
      clone(item) :
      item
)


export const getNeighborsNumber = (
  cIndex: number,
  rIndex: number,
  lifeGrid: Array<Array<number>>,
): number => {
  let living = 0
  for (let c = cIndex - 1; c <= cIndex + 1; c++) {
    for (let r = rIndex - 1; r <= rIndex + 1; r++) {
      if (c === cIndex && r === rIndex) {
        continue
      }
      if (lifeGrid?.[c]?.[r] === 1) {
        living += 1
      }
    }
  }
  return living
}


export const generateRandomState = (): Array<Array<number>> => {
  return Array(COLUMNS)
    .fill(null)
    .map(() => Array(ROWS)
      .fill(null)
      .map(() => Math.round(Math.random()))
    )
}


export const getNextState = (
  stateGrid: Array<Array<number>>,
): Array<Array<number>> => {
  const updatedlifeGrid: Array<Array<number>> = clone(stateGrid)
  for (let c = 0; c < COLUMNS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const neighborNumber = getNeighborsNumber(c, r, stateGrid)
      if (
        updatedlifeGrid[c][r] === 1 &&
        (neighborNumber < 2 || neighborNumber > 3)
      ) {
        updatedlifeGrid[c][r] = 0
      } else if (neighborNumber === 3) {
        updatedlifeGrid[c][r] = 1
      }
    }
  }
  return updatedlifeGrid
}
