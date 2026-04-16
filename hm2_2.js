let energy = 10;
let depth = 0;
let gold = 0;

while(energy > 0) {
    console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}.`);
    energy -= 1;
    depth += 1;
    if(depth === 7) {
    console.log('Монстр! Гном в панике убегает!');
    break;
    }
    if(depth % 3 === 0){
        gold += 1;
    }
}
console.log(`Смена окончена. Итоговая глубина: ${depth}, добыто золота: ${gold}`);