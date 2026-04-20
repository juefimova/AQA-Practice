//function declaration
function generateEmail(domain) {
    return `${Math.floor(Math.random() * 100)}@${domain}`;
}

//function expression, анонимная функция
const maskPassword = function (password) {
    return '*'.repeat(password.length);
}

//arrow function
const createTestUser = (name, domain) => {
    const email = generateEmail(domain);
    const password = maskPassword('12345Qwe');
    return {
        userName: name,
        email: `${name}_${email}`,
        password: password
    }
}

console.log(createTestUser('QA_Ninja', 'gmail.com'));
