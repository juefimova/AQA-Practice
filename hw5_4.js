class BasePage {
    static environment = 'QA';
    open(url) {
        console.log(`Открываю страницу: ${url} на окружении ${this.environment}`)
    }
}

class LoginPage extends BasePage {
    constructor() {
        super(); //родитель
    }
    loginInput = '#user';
    #passwordInput = '#pass';

    fillForm(user, password) {
        console.log(`Вводим логин ${user} в поле ${this.loginInput}`);
        console.log(`Вводим пароль ${password} в поле ${this.#passwordInput}`)
    }
}

const page = new LoginPage();
page.open('https://test.com/login');
page.fillForm('admin', '12345');
//console.log(page.#passwordInput); ругается