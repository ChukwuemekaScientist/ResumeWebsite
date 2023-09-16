// Get a reference to the form element
const form = document.getElementById('myform');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior (page refresh)
  event.preventDefault();

  // Get the input value
  const nameInput = document.getElementById('name');
  const name = nameInput.value;

  const paragraph = document.getElementById('output');

  paragraph.textContent = `Hi ${name}, very nice to have you here.`;

});