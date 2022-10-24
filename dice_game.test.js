const scoreDice = require('./dice_game')


test('scoreDice check Six', () => {
  let dice = [4, 4, 4, 4, 4, 4]
  expect(scoreDice(dice)).toBe(3200)
})

test('scoreDice check Five', () => {
  let dice = [4, 4, 4, 4, 4, 3]
  expect(scoreDice(dice)).toBe(1600)
})

test('scoreDice check Four', () => {
  let dice = [4, 4, 4, 4, 3, 3]
  expect(scoreDice(dice)).toBe(800)
})

test('scoreDice check Three', () => {
  let dice = [4, 4, 4, 2, 2, 3]
  expect(scoreDice(dice)).toBe(400)
})

test('scoreDice ', () => {
  let dice = [4, 4, 4, 4, 5, 1]
  expect(scoreDice(dice)).toBe(950)
})

test('scoreDice double meld of 3', () => {
  let dice = [4, 4, 4, 3, 3, 3]
  expect(scoreDice(dice)).toBe(700)
})

test('scoreDice 1-6', () => {
  let dice = [1, 2, 3, 4, 5, 6]
  expect(scoreDice(dice)).toBe(1000)
})

test('scoreDice 500', () => {
  let dice = [5, 5, 5, 4, 4, 6]
  expect(scoreDice(dice)).toBe(500)
})

test('scoreDice 500*2', () => {
  let dice = [5, 5, 5, 5, 4, 6]
  expect(scoreDice(dice)).toBe(1000)
})

test('scoreDice 500*4', () => {
  let dice = [5, 5, 5, 5, 5, 6]
  expect(scoreDice(dice)).toBe(2000)
})

test('scoreDice 500*8', () => {
  let dice = [5, 5, 5, 5, 5, 5]
  expect(scoreDice(dice)).toBe(4000)
})

test('scoreDice 1000', () => {
  let dice = [1, 1, 1, 4, 4, 6]
  expect(scoreDice(dice)).toBe(1000)
})

test('scoreDice 1000*2', () => {
  let dice = [1, 1, 1, 1, 4, 6]
  expect(scoreDice(dice)).toBe(2000)
})
test('scoreDice 1000*2', () => {
  let dice = [1, 1, 1, 1, 1, 6]
  expect(scoreDice(dice)).toBe(4000)
})
test('scoreDice 1000*8', () => {
  let dice = [1, 1, 1, 1, 1, 1]
  expect(scoreDice(dice)).toBe(8000)
})

