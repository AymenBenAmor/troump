export const colors = ['white', 'pink', 'blue', 'black', 'yellow', 'green', 'red', 'orange']

const randomizeColor = () => {
  return colors[Math.floor(Math.random() * 7)]
}

const getColor = line => {
  if (line > 16) {
    return randomizeColor()
  }
  return 'white'
}

export const createGrid = () => {
  const grid = []
  for (let i = 0; i < 24; i++) {
    grid.push([])
    for (let j = 0; j < 9; j++) {
      const color = getColor(i)
      grid[i].push({
        color: color,
        full: color !== 'white'
      })
    }
  }
  return grid
}