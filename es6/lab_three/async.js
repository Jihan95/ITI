async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching posts");
        return [];
    }
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

async function displayPosts() {
    const postsData = await getPosts();
    const parsedPosts = parsePosts(postsData);
    console.log(parsedPosts);
    addPostsToDOM(parsedPosts);
}

displayPosts();