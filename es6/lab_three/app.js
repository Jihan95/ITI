import { add as sum, subtract } from "./math.js"
import logMessage from "./logger.js";
import { fetchUsers } from './api.js';

console.log(sum(5,6));

console.log(subtract(11, 8));
logMessage("hello!!!");

async function getUsers() {
    try {
        const users = await fetchUsers();
        console.log(users);
    } catch (error) {
        console.error(error);
    }
}

getUsers();