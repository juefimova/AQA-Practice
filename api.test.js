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

getUser();