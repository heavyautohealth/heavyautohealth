document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.getElementById('price-calculator');
    const resultDiv = document.getElementById('price-result');
    const totalPriceElement = document.getElementById('total-price');

    calculator.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const testType = document.getElementById('test-type').value;
        const vehicleCount = parseInt(document.getElementById('vehicle-count').value);
        const isRetest = document.getElementById('is-retest').checked;
        const sameLocation = document.getElementById('same-location').checked;

        let basePrice;
        let total = 0;

        // Set base price based on test type
        if (testType === 'obd') {
            if (isRetest) {
                basePrice = 50;
            } else {
                basePrice = vehicleCount >= 4 && sameLocation ? 100 : 120;
            }
        } else { // smoke opacity test
            if (isRetest) {
                basePrice = 75;
            } else {
                basePrice = vehicleCount >= 4 && sameLocation ? 130 : 150;
            }
        }

        // Calculate total
        total = basePrice * vehicleCount;

        // Display result
        resultDiv.classList.remove('hidden');
        totalPriceElement.textContent = '$' + total.toFixed(2);
    });
});