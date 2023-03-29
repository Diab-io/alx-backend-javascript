export default function getListStudentIds(obj) {
  if (!Array.isArray(obj)) {
    return [];
  }

  const arrId = obj.map((students) => students.id);
  return arrId;
}
