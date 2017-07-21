function clear(array) {
  if (!Array.isArray(array)) {
    throw new Error('argument is not an array');
  }
  array.length = 0;
  return array;
}

function first(array) {
  return array[0] || null;
}

function deleteIf(array, predicate) {
  if (!Array.isArray(array)) {
    throw new Error('argument is not an array')
  }

  if(array.length === 0) return array;

  for(let i = 0; i < array.length;) {
    if(predicate(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }

  return array;
}

export {
  clear,
  first,
  deleteIf
};
