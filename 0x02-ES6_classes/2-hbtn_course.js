export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  getLength() {
    return this._length;
  }

  setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  getStudents() {
    return this._students;
  }

  setStudents(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (students.every((student) => typeof student !== 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = students;
  }
}
