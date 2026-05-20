export function getFormattedDate(): string{
    const date =  new Date();
    const day = String(date.getDate()).padStart(2, '0'); // getDay для номера дня недели, padStart чтобы добавить 0, если символов < 2

    const month = String(date.getMonth() + 1).padStart(2, '0'); //май 4, потому что отсчет с 0
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}
