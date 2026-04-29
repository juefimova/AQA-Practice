console.log("Hello TS");

function generateUserPayLoad (name: string, age: number, isPremium: boolean): string {
    return `User: ${name}, Age: ${age}, Premium: ${isPremium}`;
}
console.log(generateUserPayLoad('Alex', 23, true));