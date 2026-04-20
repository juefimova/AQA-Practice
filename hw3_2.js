// замыкание
function createRetryCounter() {
    let attemmpts = 0;

    return function() {
        attemmpts++;
        return `Попытка запуска : ${attemmpts}`;
    }
}
//независимые счетчики
//function expression
const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();

console.log(loginRetry());
console.log(loginRetry());
console.log(loginRetry());

console.log(paymentRetry());

// attempts не умирает, потому что внешняя функция createRetryCounter запускается
// только один раз (и создается attempts), а потом уже вызывается внутренняя фнукция как конкретный счетчик,
// и attempts увеличивается



