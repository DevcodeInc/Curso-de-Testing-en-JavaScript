import fetch from 'node-fetch';

function getGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  return fetch(url).then(response => response.json());
}

async function getGithubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return response.json();
}

export {
  getGithubUser,
  getGithubUserAsync
};
