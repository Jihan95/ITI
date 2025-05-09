interface Person {
    name: string,
    age: number,
    email: string
}

type ContactInfo = Pick<Person, 'name' | 'email'>;

let contact: ContactInfo = {
    name: "Samir",
    email: "samir@abc.com"
}

console.log(contact)

type ContactInfo1 = Omit<Person, 'age'>;

let contact1: ContactInfo1 = {
    name: "Ali",
    email: "ali@abc.com"
}

console.log(contact1)