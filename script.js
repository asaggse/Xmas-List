// PRELIMINARY OPERATIONS
// Select the total slot element and the gifts list element from the DOM
const totalSlot = document.querySelector('.total-slot');
const giftsListElement = document.querySelector('.gifts-list');

// Select the form element, as well as the name, price, and gift field elements
const form = document.querySelector('#gift-form');
const nameField = document.querySelector('#name-field');
const priceField = document.querySelector('#price-field');
const presentField = document.querySelector('#present-field');

// Initialize an empty array to store the gifts
let gifts = [];

// DYNAMIC EVENTS
// Add an event listener to the form element that listens for the 'submit' event
form.addEventListener('submit', function (event) {
    // Prevent the default behavior of the form (submitting the form and reloading the page)
    event.preventDefault();

    // Get the values of the name, price, and present fields, and store them in variables
    const name = nameField.value.trim();
    const price = priceField.value.trim();
    const present = presentField.value.trim();

    // Call the addGift function, passing in the values of the name, price, and gift fields
    addGift(name, price, present);

    // Reset the form fields and focus on the name field
    form.reset();
    nameField.focus();
});

// FUNCTIONS
// Define a function called addGift
function addGift(name, price, present) {
    // Create a new object called 'newGift' with the properties 'name', 'price', and 'gift'
    const newGift = {
        name,
        price: Number(price),   // Convert the value of 'price' to a number
        present
    };

    // Add the new gift to the 'gifts' array
    gifts.push(newGift);

    // Log the 'gifts' array to the console
    console.log(gifts);

    // Call the calculateTotal function to update the total
    calculateTotal();

    // Call the renderList function to update the gift list
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

// Define a function called renderList
function renderList() {
    // Clear the inner HTML of the gifts list element
    giftsListElement.innerHTML = '';

    // Loop through the 'gifts' array
    for (let i = 0; i < gifts.length; i++) {
        // Call the createListElement function, passing in the index of the current gift, and store the result in a variable
        const giftElement = createListElement(i);

        // Add the gift element to the inner HTML of the gifts list element
        giftsListElement.innerHTML += giftElement;
    }

    // Call the setDeleteButtons function to add delete buttons to the gift list elements
    setDeleteButtons();
}

// Define a function called createListElement
function createListElement(i) {
    // Get the gift at the specified index in the 'gifts' array
    const gift = gifts[i];

    // Return a string containing the HTML for a list element for the present
    return `
    <li class="gift">
        <div class="gift-info">
            <h3>${gift.name}</h3>
            <p>${gift.present}</p>
        </div>
        <div class="gift-price">${formatAmount(gift.price)}</div>
        <button class="gift-button" data-index="${i}">❌</button>
    </li>
    `;
}

function setDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.gift-button');

    for(let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];

        button.addEventListener('click', function(){
            const index = button.dataset.index;

            removeGift(index);
        });
    }
}