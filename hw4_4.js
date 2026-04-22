// rest когда неизвестно, сколько будет аргументов
const logLocators = (...args) => {
    console.log(`Готовы к работе: ${args.length} локаторов.
    Список: ${args}`);
}

logLocators('.btn-login', '#password', '[name="submit"]');