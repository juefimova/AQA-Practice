import {BASE_URL} from "./config.js";
import checkResponse from "./helpers.js";

console.log('Task 1');
console.log(BASE_URL);
console.log(checkResponse(BASE_URL));

console.log('Task 2');
const getUser = async () => {
    const response = await fetch(`${BASE_URL}/users/2`);
    if(checkResponse(response)) {
        const data = await response.json();
        console.log(data.email);
    }
}

await getUser();


console.log('Task 3');
async function getBrokenData() {
    try {
        const response = await fetch('https://reqres.in/api/users/23/сломанный_путь');
        //отвечает json с просьбой добавить ключ
        //если с 'https://www.google.com/404', то все ок
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Тест не упал, но мы поймали ошибку: ${error.message}`);
    }

}
await getBrokenData();