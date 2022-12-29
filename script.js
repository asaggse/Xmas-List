// PRELIMINARY OPERATIONS
// Select the total slot element and the gifts list element from the DOM
const totalSlot = document.querySelector('.total-slot');
const giftsListElement = document.querySelector('.gifts-list');

// Select the form element, as well as the name, price, and gift field elements
const form = document.querySelector('#gift-form');
const nameField = document.querySelector('#name-field');
const priceField = document.querySelector('#price-field');
const giftField = document.querySelector('#gift-field');

// Initialize an empty array to store the gifts
let gifts = [];

// DYNAMIC EVENTS
// Add an event listener to the form element that listens for the 'submit' event
form.addEventListener('submit', function (event) {
    // Prevent the default behavior of the form (submitting the form and reloading the page)
    event.preventDefault();

    // Get the values of the name, price, and gift fields, and store them in variables
    const name = nameField.value.trim();
    const price = priceField.value.trim();
    const gift = giftField.value.trim();

    // Call the addGift function, passing in the values of the name, price, and gift fields
    addGift(name, price, gift);

    // Reset the form fields and focus on the name field
    form.reset();
    nameField.focus();
});

// FUNCTIONS
function addGift(name, price, gift) {
    const newGift = {
        name,
        price: Number(price),
        gift
    };

    gifts.push(newGift);
    console.log(gifts);

    calculateTotal();

    renderList();
}

// Define a function called calculateTotal
function calculateTotal() {
    // Initialize a variable called 'total' to 0
    let total = 0;

    // Loop through the 'gifts' array
    for (let i = 0; i < gifts.length; i++) {
        // Add the price of the current gift to the 'total' variable
        total += gifts[i].price;
    }

    // Set the inner text of the total slot element to the formatted value of the 'total' variable
    totalSlot.innerText = formatAmount(total);
}

// Define a function called formatAmount
function formatAmount(amount) {
    // Return the value of 'amount' formatted to two decimal places, followed by the euro symbol
    return amount.toFixed(2) + '€';
}