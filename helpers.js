//default export
export default function checkResponse(response) {
    if (response.ok) {
        return true;
    } else {
        console.log(`Статус: ${response.status}`); //проверка статуса
        return false;
    }

}
