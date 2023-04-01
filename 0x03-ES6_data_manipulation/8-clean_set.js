export default function cleanSet(set, startString) {
  const myList = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const prop of set) {
    if ((typeof prop === 'string') && (prop.startsWith(startString))) {
      myList.push(prop.slice(startString.length));
    }
  }
  return myList.join('-');
}
