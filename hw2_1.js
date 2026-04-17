const room = 'bedroom';
const timeOfDay = 20;
const sensorTemp = null;

// 1 оператор нулевого слияния
const currentTemp = sensorTemp ?? 22; // если sensorTemp = null, то значение 22
// 2 тернарный оператор
const isLightOn = (timeOfDay >= 18 || timeOfDay < 6) ? true : false;

// 3
const light = isLightOn ? 'включен': 'выключен';
switch (room) {
    case "bedroom":
        console.log(`Спальня: Свет ${light},
         Температура ${currentTemp}`);
        break;
    case "kitchen":
        console.log(`Кухня: Работает вытяжка. Свет ${light}`);
        break;

    default:
        console.log('Неизвестная комната');
        break;
}

// *
room === 'bedroom' && console.log('Увлажнитель воздуха включен');
// в JS && (и) проверяет true ли левая часть, и тогда выполняет правую,
// а если левая часть false, то он сразу останавливается, и игнорирует правую часть