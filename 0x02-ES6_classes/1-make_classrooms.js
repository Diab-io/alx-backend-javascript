import ClassRoom from './0-classroom';
import HolbertonCourse from './2-hbtn_course';

export default function initializeRooms() {
  const classArr = [];
  const arr = [19, 20, 34];
  for (let i = 0; i < arr.length; i += 1) {
    classArr.push(new ClassRoom(arr[i]));
  }

  return classArr;
}

const c1 = new HolbertonCourse('ES6', 1, ["Bob", "Jane"])
console.log(c1.name)