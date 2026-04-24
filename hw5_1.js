const baseElement = {
    click(){
        console.log('Клик по элементу');
    }
}

const loginButton = {
    locator: '#login',
    text: 'Войти'
}

loginButton.__proto__ = baseElement; //ссылка на объект
loginButton.click();

