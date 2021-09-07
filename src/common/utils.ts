
export const clone = (items: Array<any>): Array<any> => items.map(
  (item: Array<number>) => Array.isArray(item) ? clone(item) : item
)


export const getNeighborsNumber = (
  cIndex: number,
  rIndex: number,
  lifeGrid: Array<Array<number>>,
) => {
  let living = 0
  for(let c = cIndex - 1; c <= cIndex + 1; c++) {
    for(let r = rIndex - 1; r <= rIndex + 1; r++) {
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
