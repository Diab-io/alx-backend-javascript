/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
    const arrNew = [];
    for (const idx of array) {
      arrNew.push(appendString + idx);
    }
  
    return arrNew;
  }
