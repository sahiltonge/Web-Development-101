// Function to load stored entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear the table before loading

    entries.forEach(entry => {
        const newRow = tableBody.insertRow();
        
        newRow.insertCell(0).textContent = entry.name;
        newRow.insertCell(1).textContent = entry.email;
        newRow.insertCell(2).textContent = entry.password;
        newRow.insertCell(3).textContent = entry.dob;
        newRow.insertCell(4).textContent = entry.acceptedTerms ? 'true' : 'false';
    });
}

// Function to check if the age is between 18 and 55 years
function isValidAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if the birthday has not occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18 && age <= 55;
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('terms').checked;

    // Validate age (between 18 and 55)
    if (!isValidAge(dob)) {
        alert('You must be between 18 and 55 years old to register.');
        return;
    }

    // Get current entries from localStorage or an empty array
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Create new entry object
    const newEntry = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        acceptedTerms: acceptedTerms
    };

    // Add new entry to the array
    entries.push(newEntry);

    // Store updated array back in localStorage
    localStorage.setItem('entries', JSON.stringify(entries));

    // Reload the table to reflect the new entry
    loadEntries();

    // Clear the form
    document.getElementById('registrationForm').reset();
});

// Load entries when the page is loaded
window.onload = loadEntries;

