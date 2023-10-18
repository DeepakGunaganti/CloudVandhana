document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Validate the form here//
    
    // Displaying the popup with form data
    document.getElementById('popup-firstName').textContent = document.getElementById('firstName').value;
    document.getElementById('popup-lastName').textContent = document.getElementById('lastName').value;
    document.getElementById('popup-dob').textContent = document.getElementById('dob').value;
    document.getElementById('popup-country').textContent = document.getElementById('country').value;
    
    const selectedGender = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.labels[0].textContent).join(', '); //here we use join method to joing the words at one sentence//
    document.getElementById('popup-gender').textContent = selectedGender;

    document.getElementById('popup-profession').textContent = document.getElementById('profession').value;
    document.getElementById('popup-email').textContent = document.getElementById('email').value;
    document.getElementById('popup-mobile').textContent = document.getElementById('mobile').value;

    document.getElementById('popup').style.display = 'block';
});

document.getElementById('surveyForm').addEventListener('reset', function () {
    // Reseting the form values
    document.getElementById('popup').style.display = 'none';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('surveyForm').reset();
}