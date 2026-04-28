//default export
export default function checkResponse(response) {
    if (response.ok) {
        return true;
    } else {
        console.log(`Статус: ${response.status}`); //проверка статуса
        return false;
    }

}

export function assertEqual(actual, expected, message) {
    if(actual === expected) {
        console.log(`[PASSED] ${message}`)
    } else {
        throw new Error(`\[FAILED] ${message}: ожидалось ${expected}, получили ${actual}`);
    }
}