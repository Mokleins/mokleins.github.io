document.getElementById("calcBtn").addEventListener("click", calculateDeal);

function calculateDeal() {
  const msrp = parseFloat(document.getElementById("msrp").value) || 0;
  const savings = parseFloat(document.getElementById("savings").value) || 0;
  const docFee = parseFloat(document.getElementById("docFee").value) || 0;
  const licenseFee = parseFloat(document.getElementById("licenseFee").value) || 0;

  if (msrp <= 0) {
    document.getElementById("result").textContent = "Please enter a valid MSRP.";
    return;
  }

  const sellingPrice = msrp - savings;
  const taxRate = 0.065;

  // Maryland: taxes apply to Selling Price + Doc Fee
  const taxableAmount = sellingPrice + docFee;
  const taxes = taxableAmount * taxRate;

  const finalPrice = sellingPrice + docFee + licenseFee + taxes;

  document.getElementById("result").innerHTML = `
    <strong>Deal Breakdown:</strong><br>
    MSRP: $${msrp.toFixed(2)} <br>
    Savings: -$${savings.toFixed(2)} <br>
    Selling Price: $${sellingPrice.toFixed(2)} <br><br>
    Sales Sub Total: $${sellingPrice.toFixed(2)}<br><br>
    State Taxes (6.5%): $${taxes.toFixed(2)} <br>
    Doc Fee: $${docFee.toFixed(2)} <br>
    License Fee: $${licenseFee.toFixed(2)} <br><br>
    <strong>Final Price: $${finalPrice.toFixed(2)}</strong>
  `;
}
