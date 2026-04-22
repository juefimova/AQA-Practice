const testResults = [
    { id: 1, name: 'Login Test', status: 'passed', time: 120 },
    { id: 2, name: 'Payment Test', status: 'failed', time: 300 },
    { id: 3, name: 'Profile Test', status: 'passed', time: 90 },
    { id: 4, name: 'Cart Test', status: 'skipped', time: 10 }
];

// filter() фильтрует объекты по признаку
const failedTests = testResults.filter(function (test) {
    return test.status === 'failed';
})

// map() выделяет отдельные признаки в отдельный массив
const passedTestsIds = testResults.filter(function (test){
    return test.status === 'passed';
}).map(function (test){
    return test.id;
});

// reduce() накапливает результат, складывает значения массива
const totalExecutionTime = testResults.reduce(function(acc, test) {
    return acc + test.time;
},0);

console.log("Failed tests: ", failedTests);
console.log(`Ids of passed tests: ${passedTestsIds}`);
console.log(`Total Execution Time: ${totalExecutionTime}`);