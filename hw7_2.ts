interface UserData {
    id: number,
    email: string,
    tags: string[]
}

interface ApiResponse {
    status: string,
    data: UserData
}

const mockResponse: ApiResponse = {
    status: "success",
    data: {
        id: 101,
        email: "test@qa.com",
        tags: ["e2e", "smoke"] //с числами подсвечивает красным
    }
}

console.log(mockResponse);