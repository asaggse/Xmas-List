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
}

function calculateTotal() {
    
}    