export default function appendToEachArrayValue(array, appendString) {
  let num = 0;
  for (const idx of array) {
    array[num] = appendString + idx; // eslint-disable-line no-param-reassign
    num++; // eslint-disable-line no-plusplus
  }

  return array;
}
