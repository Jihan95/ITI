interface Profile {
    username ?: string,
    email ?: string
}

let profile:Required<Profile> ={
    username: "Nahla",
    email: "nahla@AbortController.com"
}

console.log(profile)