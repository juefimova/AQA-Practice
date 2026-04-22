const bugReport = { id: 104, title: 'Button crash', severity: 'High', status: 'Open' }

// деструктуризация и ...bugDetails - все остальное (оператор rest)
const {id, ...bugDetails} = bugReport;
console.log(id, bugDetails);