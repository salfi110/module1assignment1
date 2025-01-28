// Select elements from the DOM
const inputField = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const list = document.getElementById('myList');

// Add click event listener to the button
addButton.addEventListener('click', () => {
  // Get the value from the input field
  const inputValue = inputField.value.trim();

  // Check if input is not empty
  if (inputValue !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;

    // Add the list item to the <ul>
    list.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
  } else {
    alert('Please enter some text.');
  }
});
