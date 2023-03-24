import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classArr = [];
  const arr = [19, 20, 34];
  for (let i = 0; i < arr.length; i += 1) {
    classArr.push(new ClassRoom(arr[i]));
  }

  return classArr;
}
