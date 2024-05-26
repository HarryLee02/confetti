// script.js
function checkName() {
    const userInput = document.getElementById('name').value;
    const expectedName = 'Nguyen Tran Bao Nhi'; // Replace with your desired string
    if (userInput !== '' && userInput === expectedName) {
    
            // Redirect to another page (e.g., 'page3.html')
            window.location.href = 'hello.html';
        } else {
            $('#exampleModal').modal('show'); // Show an alert if the input doesn't match
        }
    
}

