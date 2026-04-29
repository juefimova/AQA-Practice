interface BaseResponse {
    timestamp: number,
    error?: string
}

interface LoginResponse extends BaseResponse{
    token: string
}

const response: LoginResponse = {
    token: '1234',
    timestamp: 123,
    // не ругается если нет error
}

console.log(response);