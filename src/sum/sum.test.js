import sum from './sum';

test('suma 1 + 2 igual a 3', () => {
  const actual = sum(1, 2);
  const expected = 3;
  expect(actual).toEqual(expected);
});
