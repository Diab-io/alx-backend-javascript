function iterateThroughObject(reportWithIterator) { // eslint-disable-line no-unused-vars
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}

export default iterateThroughObject;
