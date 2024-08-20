// script.js

const birthdayMap = new Map();
birthdayMap.set("Nguyen Tran Bao Nhi", "26-05-2004");
birthdayMap.set("Le Ngoc Hieu", "02-11-2004");
birthdayMap.set("Nguyen Hoang Phuong Doanh", "21-08-2004");

const nameForm = document.getElementById("nameForm");

    // Attach an event listener to the form
    nameForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        checkName(); // Call your custom function
    });

function checkName() {
    const userInput = document.getElementById("name").value;
    let flag = false; // Initialize flag to false

    for (const [key, value] of birthdayMap) {
        if (userInput === key) {
            flag = true;
            window.location.href = '/hello.html';
            break;
        }
    }

    if (flag == false) {
        // Show the modal when the input doesn't match
        $('.modal_title_placeholder').html('Thông báo!');
        $('.modal_body_placeholder').html('You are not on the list, get out! (bro sneak into a stranger github or cannot write the name right, damn... >_<)');
        $('#Modal').modal('show');
    }
}


