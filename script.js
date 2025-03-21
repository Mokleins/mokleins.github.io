function calculateTotal() {
    var carPrice = parseFloat(document.getElementById('carPrice').value);
    if (isNaN(carPrice) || carPrice <= 0) {
        alert("Please enter a valid car price.");
        return;
    }
    var tax = (carPrice + 522) * 0.06;
    var total = carPrice + tax + 522 + 800;
    document.getElementById('displayCarPrice').textContent = carPrice.toFixed(2);
    document.getElementById('displayTax').textContent = tax.toFixed(2);
    document.getElementById('displayTotal').textContent = total.toFixed(2);
    document.getElementById('results').style.display = 'block';
}