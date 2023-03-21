export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (total) => Object.keys(total).length,
  };
}
