const scoreDice = require('./dice_game');


test('scoreDice check Six', () => {
    let dice = [4, 4, 4, 4, 4, 4];
  expect(scoreDice(dice)).toBe(3200);
});

test('scoreDice check Five', () => {
    let dice = [4, 4, 4, 4, 4, 3];
  expect(scoreDice(dice)).toBe(1600);
});

test('scoreDice check Four', () => {
    let dice = [4, 4, 4, 4, 3, 3];
  expect(scoreDice(dice)).toBe(800);
});

test('scoreDice check Three', () => {
    let dice = [4, 4, 4, 2, 2, 3];
  expect(scoreDice(dice)).toBe(400);
});

test('scoreDice ', () => {
    let dice = [4, 4, 4, 4, 5, 1];
  expect(scoreDice(dice)).toBe(950);
});

test('scoreDice new', () => {
  let dice = [4, 4, 4, 3, 3, 3];
expect(scoreDice(dice)).toBe(700);
});

test('scoreDice new', () => {
  let dice = [1, 2, 3, 4, 5, 6];
expect(scoreDice(dice)).toBe(1000);
});


