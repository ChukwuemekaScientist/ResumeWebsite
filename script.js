document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subform');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nameInput = document.getElementById('name');

        const name = nameInput.value;

        // Display the values in the output div
        output.innerHTML = `<p>Hi ${name}, very nice to meet you.</p>`;
    });
});
