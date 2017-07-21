import { getGithubUser, getGithubUserAsync } from './github-api';

describe('getGithubUser function tests', () => {
  test('it should return a promise', () => {
    const promise = getGithubUser('enrique7mc');
    const actual = !!promise && !!promise.then && typeof promise.then === 'function';
    expect(actual).toBeTruthy();
  });

  test('it should return a user with a name', () => {
    expect.assertions(1);
    return getGithubUser('enrique7mc').then(actual => {
      expect(actual).toHaveProperty('name', 'Enrique Munguía');
    })
  });
});

describe('getGithubUserAsync function tests', () => {
  test('it should return a user with a name', async () => {
    expect.assertions(1);
    const actual = await getGithubUserAsync('enrique7mc');
    expect(actual).toHaveProperty('name', 'Enrique Munguía');
  });
});
