    // Set the date of the event
    const eventDate = new Date("October 20, 2024").getTime();

    // Update the countdown every second
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Calculate days
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = days + " days to go!";

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "The event is happening today!";
        }
    }, 1000);