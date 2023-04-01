function updateStudentGradeByCity(students, city, newGrades) {
  const newArr = students.filter((student) => student.location === city).map((element) => {
    element.grade = 'N/A'; // eslint-disable-line no-param-reassign
    for (const grades of newGrades) {
      if (grades.studentId === element.id) {
        element.grade = grades.grade; // eslint-disable-line no-param-reassign
      }
    }
    return element;
  });
  return newArr;
}

export default updateStudentGradeByCity;
