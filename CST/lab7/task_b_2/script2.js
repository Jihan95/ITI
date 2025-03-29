let userName = getCookie('userName');
let gender = getCookie('gender');
let color = getCookie('color');
let imgContainer = document.getElementById("image-container");
let count = getCookie("refreshCount");

let message = `
    <h2>
        Welcome <span style="color: ${color};">${userName}</span>, 
        you have visited this site 
        <span style="color: ${color};">${count}</span> times :)
    </h2>`;

if (gender === "Female") {
    imgContainer.innerHTML = "<img src='./images/2.jpg'>"
} else if ( gender === "Male") {
    imgContainer.innerHTML = "<img src='./images/1.jpg'>"
}
imgContainer. innerHTML += message;

if (count === undefined) {
    count = 1;
  } else {
    count = parseInt(count) + 1;
  }

setCookie("refreshCount", count);
