export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList,
        getNumberOfDepartments: (total) => {return Object.keys(total).length}
    }
}