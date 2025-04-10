let user = {
    userName: "Maryam",
    age: 10,
    address: {
        city: "Barcelona",
        country: "Spain"
    },
    hobbies: ["reading", "cooking", "swimming"]
};

let {userName, age, address:{ city, country } , hobbies} = user;

console.log(userName);
console.log(age);
console.log(city);
console.log(country);
console.log(hobbies);