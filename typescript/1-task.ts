interface User {
    name: string,
    age: number
}

let user:Partial<User> = {
    name: "Mohammed"
}

console.log(user);