export default function appendToEachArrayValue(array, appendString) {
    let num = 0;
    for (const idx of array) {
      array[num] = appendString + idx;
      num++;
    }
  
    return array;
  }
