const defaultSettings = { headless: true, timeout: 30000, retries: 1 };
const specificTestOverrides = { timeout: 60000, viewport: { width: 1920, height: 1080 } };

const finalConfig = {...defaultSettings, ...specificTestOverrides};
console.log(finalConfig);

//spread: объединяет масиивы, совпадающие ключи перезаписываются значениями 2-го массива, несовпадающие дополняются