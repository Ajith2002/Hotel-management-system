document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var checkinDate = document.getElementById('checkin-date').value;
    var checkoutDate = document.getElementById('checkout-date').value;
    var roomType = document.getElementById('room-type').value;
    var guests = document.getElementById('guests').value;

    // Perform validation
    if(checkinDate === "" || checkoutDate === "" || guests === "") {
        document.getElementById('booking-status').innerHTML = "<p>Please fill in all fields.</p>";
        return;
    }

    // Assume booking is successful
    document.getElementById('booking-status').innerHTML = `
        <p>Booking Successful!</p>
        <p>Check-in Date: ${checkinDate}</p>
        <p>Check-out Date: ${checkoutDate}</p>
        <p>Room Type: ${roomType}</p>
        <p>Number of Guests: ${guests}</p>
    `;
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform validation
    if(username === "" || password === "") {
        document.getElementById('login-status').innerHTML = "<p>Please fill in all fields.</p>";
        return;
    }

    // Dummy authentication
    if(username === "admin" && password === "password") {
        document.getElementById('login-status').innerHTML = "<p>Login successful!</p>";
    } else {
        document.getElementById('login-status').innerHTML = "<p>Incorrect username or password.</p>";
    }
});


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // You can add form validation here if needed
        
        // Show the thank-you message
        document.getElementById('thankYouMessage').style.display = 'block';
        
        // Optionally, you can reset the form fields after submission
        this.reset();
    });


