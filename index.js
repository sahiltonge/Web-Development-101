document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('terms').checked;  // Checkbox value

    // Validate form input if needed

    // Get the table body
    const tableBody = document.querySelector('#userTable tbody');

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells for each column and set values
    const nameCell = newRow.insertCell(0);
    nameCell.textContent = name;

    const emailCell = newRow.insertCell(1);
    emailCell.textContent = email;

    const passwordCell = newRow.insertCell(2);
    passwordCell.textContent = password;

    const dobCell = newRow.insertCell(3);
    dobCell.textContent = dob;

    const termsCell = newRow.insertCell(4);
    termsCell.textContent = acceptedTerms ? 'true' : 'false';

    // Optionally, clear the form
    document.getElementById('registrationForm').reset();
});
