document.getElementById('searchButton').addEventListener('click', function() {
    let searchValue = document.getElementById('searchBar').value.toLowerCase();
    let tableContainer = document.getElementById('tableContainer');
    let tableRows = document.querySelectorAll('#linksTable tbody tr');

    // Check if there is a search value
    if (searchValue.trim() !== '') {
        tableContainer.classList.remove('hidden'); // Show table container

        // Filter table rows
        let hasVisibleRows = false;
        tableRows.forEach(row => {
            let linkName = row.cells[0].textContent.toLowerCase();
            let linkUrl = row.cells[1].textContent.toLowerCase();

            if (linkName.includes(searchValue) || linkUrl.includes(searchValue)) {
                row.style.display = '';
                hasVisibleRows = true;
            } else {
                row.style.display = 'none';
            }
        });

        // If no rows match the search, show a message or hide the table
        if (!hasVisibleRows) {
            tableContainer.innerHTML = '<p>No matching links found.</p>';
        }
    } else {
        tableContainer.classList.add('hidden'); // Hide table container if no search input
    }
});

function viewLink(url, name) {
    let viewSection = document.getElementById('viewSection');
    viewSection.innerHTML = `
        <h2>Lab Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
    `;
}
