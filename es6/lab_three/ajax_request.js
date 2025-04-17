 export function fetchUsers(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            callback(response);
        }
    }
    xhr.send();
}

function parseUsers(response) {
    let users = [];

    for (const data of response){
        users.push(data.name);
    }
    return users;
}

function addUsersToDOM (users) {
    const ul = document.getElementById("users");

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        ul.appendChild(li);
    });
}


fetchUsers(function (response) {
    const users = parseUsers(response);
    addUsersToDOM(users);
});