let nameElem = document.getElementById("name");
let ageElem = document.getElementById("age");
let selectElem = document.getElementById("c");
let radioElems = document.querySelectorAll('input[name="gender"]');
let submitButton = document.getElementById("submit");

nameElem.addEventListener("change", function() {
    setCookie('userName', nameElem.value);   
});

ageElem.addEventListener("change", function() {
    setCookie('userAge', ageElem.value);
});

for(let i = 0; i < radioElems.length; i++){
    radioElems[i].addEventListener("change", function (e) {
        if(e.target.checked) {
            setCookie('gender', e.target.value);
        }
    })
}

selectElem.addEventListener("change", function () {
    setCookie("color", selectElem.value);
});

submitButton.addEventListener("click", function() {
    setCookie("refreshCount", 1);
    window.location.replace("profile.html")
})
