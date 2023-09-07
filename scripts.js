document.querySelector('.menu').addEventListener('click', function() {
    this.classList.toggle('menu-active');
  });


  $(document).ready(function() {
    $(window).scroll(function() {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > 100); // Change '100' to the scroll position at which you want the effect to trigger
    });
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const menu = document.getElementById('menu');

if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}


var currentTopImageSrc = "joshua.jpg"; // Store the current top image source
var defaultTopImageSrc = "joshua.jpg"; // Store the default top image source

function swapImage(newTitle, newName, newAge, newEducation, newImageSrc) {
    var mainImage = document.getElementById("main-image");
    var title = document.getElementById("title");
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var education = document.getElementById("education");

    // Swap the top image source with the clicked image source
    mainImage.src = newImageSrc;

    // Update the text
    title.textContent = newTitle;
    name.textContent = newName;
    age.textContent = newAge;
    education.textContent = newEducation;

    if (window.innerWidth <= 768) {
        // For mobile view, update the top image alt text
        mainImage.alt = newTitle;
    }
}

// Set the date and time for the countdown (in UTC)
const countdownDate = new Date("2023-10-30T00:00:00Z").getTime();

// Set the target date and time for the countdown (in UTC)
const targetDate = new Date("2023-10-30T00:00:00Z");

function updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        // Countdown has ended, display a message
        document.getElementById("months").textContent = "0";
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return; // Stop the countdown
    }

    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown when the page loads
updateCountdown();

// Your existing JavaScript code

// Your existing JavaScript code

// Function to show the reminder
function showReminder() {
    const reminder = document.getElementById("reminder");
    reminder.style.display = "flex";

    // Play the alarm sound (optional)
    const alarmSound = document.getElementById("alarmSound");
    alarmSound.play();

    // Stop the countdown (optional)
    clearInterval(countdownInterval);
}

// Check if the countdown has ended and show the reminder
if (targetDate <= new Date()) {
    showReminder();
} else {
    // If the countdown hasn't ended, hide the reminder initially
    const reminder = document.getElementById("reminder");
    reminder.style.display = "none";
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to set the countdown when the page loads
updateCountdown();




// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('active');
}



// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('active');
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// Get all elements with class "read-more"
var readMoreLinks = document.querySelectorAll('.read-more');

// Add click event listeners to each "read-more" link
readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the target modal ID from the link's "data-modal" attribute
        var targetModalId = this.getAttribute('data-modal');

        // Open the modal associated with the clicked link
        openModal(targetModalId);
    });
});
