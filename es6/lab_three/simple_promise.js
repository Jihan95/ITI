function delayedMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 3000);
    })
}

delayedMessage().then((message) => {
    console.log(message);
});