// Select the total users and total sales elements
const totalUsers = document.getElementById('totalUsers');
const totalSales = document.getElementById('totalSales');

// button
const alertButton = document.getElementById('alertButton');

// Add an event listener
alertButton.addEventListener('click', function() {
    alert(`Total Users: ${totalUsers.innerText}, Total Sales: ${totalSales.innerText}`);
});