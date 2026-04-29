type Environment = 'local' | 'stage' | 'prod';

function setApiUrl(env: Environment): string {
    switch(env) {
        case 'local' :
            return 'http://localhost:3000';
        case 'stage' :
            return 'https://stage.api.com';
        case 'prod':
            return 'https://prod.api.com';
    }
}

console.log(setApiUrl('stage'));
//console.log(setApiUrl('test')); подсвечивает красным