import { clear, first, deleteIf } from './array-utils';

describe('clear function tests', () => {
  test('it should clear an empty array', () => {
    const expected = [];
    const array = [];
    const actual  = clear(array);

    expect(actual).toEqual(expected);
  });

  test('it should clear a non-empty array', () => {
    const expected = [];
    const array = [1, 2, 3, 4];
    const actual = clear(array);

    expect(actual).toEqual(expected);
  });

  test('it should throw when the argument is not an array', () => {
    expect(() => {
      clear();
    }).toThrow('argument is not an array');
  });
});

describe('first function tests', () => {
  test('it should return null if the array has no elements', () => {
    const expected = null;
    const array = [];
    const actual = first(array);
    expect(actual).toEqual(expected);
  });

  test('it should return the first element of an array', () => {
    const expected = 30;
    const array = [expected, 20, 10, 5];
    const actual = first(array);
    expect(actual).toEqual(expected);
  });

  test('it should throw when the argument is not an array', () => {
    expect(() => {
      clear();
    }).toThrow('argument is not an array');
  });
});

describe('deleteIf function tests', () => {
  test('it should delete all elements that match the condition', () => {
    const array = [3, 5, 7, 9, 11];
    const greaterThan5 = (number) => number > 5;
    const expected = [3, 5];
    const actual = deleteIf(array, greaterThan5);
    expect(actual).toEqual(expected);
  });

  test('it should return an empty array if the array is empty', () => {
  });

  test('it should not delete any elements if none match the condition', () => {
  });

  test('it should throw when the argument is not an array', () => {
  });
});
