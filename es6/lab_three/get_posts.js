function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .catch(error => {
            console.log("Error fetching posts");
            return [];
        });
}

function parsePosts(response) {
    const posts = [];

    for (const post of response) {
        posts.push({
            title: post.title,
            body: post.body
        });
    }
    return posts;
}

function addPostsToDOM (posts) {
    const ul = document.getElementById("posts");

    posts.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `<p><b><i>${post.title}</i></b></p>
        <p>${post.body}</p>`
        ul.appendChild(li);
    });
}

getPosts()
.then(parsePosts)
.then(addPostsToDOM)
.catch(error => {
    console.log("Error fetching posts");
});