const testRunner = {
    testName: 'Login API Test',
    run() {
        setTimeout(() => { // у arrow functions нет this
            console.log(`Запускаю тест: ${this.testName}`);
        }, 1000);
    }
}

testRunner.run();