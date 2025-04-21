document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name && date && time && guests) {
        document.getElementById('confirmation').textContent = `Thank you, ${name}! Your table for ${guests} guests has been booked for ${date} at ${time}. We look forward to serving you at Burger Hut!`;
        document.getElementById('booking-form').reset();
    } else {
        document.getElementById('confirmation').textContent = 'Please fill in all fields.';
    }
});

