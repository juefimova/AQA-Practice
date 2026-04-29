interface UserData {
    id: number,
    email: string,
    tags: string[]
}

const fetchUser = async () : Promise<UserData> => {
    return {
        id: 1,
        email: "ts@cool.com",
        tags: ["api"]
    }
}

console.log(fetchUser());