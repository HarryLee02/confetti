// script.js

const nameArr = {
    "Nguyen Tran Bao Nhi": "26-05-2004",
    "Le Ngoc Hieu": "02-11-2004"
  };

function checkName() {
    const userInput = document.getElementById('name').value;
    if (userInput !== '') {
        for (const name in nameArr) {
            if (userInput === name) {
                window.location.href = '/hello.html';
                flag = true;
                break;
            }
        }
    } else {
        $('.modal_title_placeholder').html('Thông báo!')
        $('.modal_body_placeholder').html('You are not on the list, get out! (bro sneak into a stranger github or cannot write the name right, damn... >_<)')
        $('#exampleModal').modal('show'); // Show an alert if the input doesn't match
    }
}


