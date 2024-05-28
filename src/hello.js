// script.js

const birthdayMap = new Map();
birthdayMap.set("Nguyen Tran Bao Nhi", "26-05-2004");
birthdayMap.set("Le Ngoc Hieu", "02-11-2004");


function checkName() {
    const userInput = document.getElementById('name').value;
    let flag = false;
    for (const [key,value] of birthdayMap) {
        if (userInput === key) {
            window.location.href = '/hello.html';
            flag = true;
            break;
        }
    }
    if (flag === false) {
        $('.modal_title_placeholder').html('Thông báo!')
        $('.modal_body_placeholder').html('You are not on the list, get out! (bro sneak into a stranger github or cannot write the name right, damn... >_<)')
        $('#Modal').modal('show'); // Show an alert if the input doesn't match
    }
}


