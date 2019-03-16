const findIndex = (array, key, value) => array.map(data => data[key]).indexOf(value);

const isEmpty = (value) => {
  if (!value) return false;
  if (Array.isArray(value)) return Boolean(value.length);
  return value ? Boolean(Object.keys(value).length) : false;
};

const isNotEmpty = value => isEmpty(value);

export {
  findIndex,
  isEmpty,
  isNotEmpty
};