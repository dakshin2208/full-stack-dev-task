document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var regno = document.getElementById('regno').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;

    // Get the table and heading elements
    var table = document.getElementById('feedbackTable');
    var tableHeading = document.getElementById('tableHeading');

    // Get the table body element
    var tableBody = document.getElementById('feedbackTableBody');

    // Create a new row and insert cells
    var newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = regno;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = feedback;

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Show the table and heading when the first entry is submitted
    table.style.display = 'table';
    tableHeading.style.display = 'block';

    // Clear the form fields
    e.target.reset();
});
