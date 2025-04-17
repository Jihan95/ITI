function fetchData() {
    let random = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (random % 2 == 0) {
                resolve("Data Recieved");
            } else {
                reject("Error: Network Error!")
            }
        }, 2000);
    })
}

function toUpper (data) {
    return new Promise ((resolve) => {
        resolve(data.toUpperCase());
    })
}
fetchData()
    .then((result) => toUpper(result))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
