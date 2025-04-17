export async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
}
