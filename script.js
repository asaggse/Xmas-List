// PRELIMINARY OPERATIONS
const totalSlot = document.querySelector('.total-slot');
const giftsListElement = document.querySelector('.gifts-list');

const form = document.querySelector('#gift-form');
const nameField = document.querySelector('#name-field');
const priceField = document.querySelector('#price-field');
const giftField = document.querySelector('#gift-field');

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