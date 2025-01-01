let selectedAmount = 5; // Default amount

// Handle amount button clicks
document.querySelectorAll('.amount-options button').forEach(button => {
    button.addEventListener('click', () => {
        const amount = button.dataset.amount;

        // If custom amount is selected, show input field
        if (amount === 'custom') {
            document.getElementById('custom-amount').style.display = 'block';
            selectedAmount = null; // Reset amount
        } else {
            document.getElementById('custom-amount').style.display = 'none';
            selectedAmount = parseFloat(amount);
        }
    });
});

// Handle custom amount input
document.getElementById('custom-amount').addEventListener('input', (e) => {
    selectedAmount = parseFloat(e.target.value) || 0; // Update amount from input
});

// PayPal Button Integration
paypal.Buttons({
    createOrder: async function () {
        if (!selectedAmount || selectedAmount <= 0) {
            alert('Please select a valid donation amount.');
            throw new Error('Invalid donation amount.');
        }

        return fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: selectedAmount }) // Send amount to backend
        })
        .then(response => response.json())
        .then(orderData => orderData.id);
    },
    onApprove: async function (data, actions) {
        return fetch(`/api/orders/${data.orderID}/capture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(details => {
            alert('Thank you for your donation!');
        })
        .catch(err => console.error(err));
    }
}).render('#paypal-button-container');

// Card Payment Fields Integration
const cardField = paypal.CardFields({
    createOrder: async function () {
        if (!selectedAmount || selectedAmount <= 0) {
            alert('Please select a valid donation amount.');
            throw new Error('Invalid donation amount.');
        }

        return fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: selectedAmount })
        })
        .then(response => response.json())
        .then(orderData => orderData.id);
    },
    onApprove: async function () {
        alert('Thank you for your donation!');
    }
});

if (cardField.isEligible()) {
    cardField.render('#card-form');
}