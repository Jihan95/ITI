onload = function () {
  confirmSubmission();
  customEvent();
};

function confirmSubmission() {
  let formElem = document.getElementById("form1");

  formElem.addEventListener("submit", function (event) {
    let confirmation = confirm("Are you sure that you want to submit?");

    if (!confirmation) {
      event.preventDefault();
    }
  });
}

function customEvent() {
  let myEvent = new Event("custEvent");
  let inputFields = document.getElementsByClassName("inputField");


  document.addEventListener("custEvent", function () {
    alert("you have not entered any data");
  });

  setInterval(function () {
    let isEmpty = true;

    for (let i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value.trim() !== "") {
        isEmpty = false;
      }
    }
    if (isEmpty) {
      document.dispatchEvent(myEvent);
    }
  }, 30000);
}
