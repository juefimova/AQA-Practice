//default export
export default function checkResponse(response) {
    if (response.ok) {
        return true;
    } else {
        console.error(`Статус: ${response.status}`); //проверка статуса
        return false;
    }

}
