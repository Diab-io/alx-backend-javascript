function getStudentIdsSum(students) {
  return students.reduce((total, ids) => total + ids.id, 0);
}

export default getStudentIdsSum;
