
export const getRandomNumberBetween = (min: number, max: number): number => {
  min = Math.ceil(min) // Minimum is inclusive
  max = Math.floor(max) // Maximum is exclusive
  return Math.floor(Math.random() * (max - min) + min)
}
