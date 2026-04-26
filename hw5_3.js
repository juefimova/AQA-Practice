const fwConfig = {
    _timeout: 5000,
    set timeout(value) {
        if(value < 0 || typeof value != 'number') {
            throw new Error('Некорректный таймаут');
        }
        this._timeout = value;
    },
    get timeout() {
        return `Текущий таймаут: ${this._timeout}`;
    }
}
fwConfig.timeout = 1000;
console.log(fwConfig.timeout);
//используем get, set для _ # переменных