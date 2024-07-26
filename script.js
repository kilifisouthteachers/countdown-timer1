document.addEventListener('DOMContentLoaded', function() {
    
    const endDate = new Date('August 2, 2024 23:59:59').getTime();

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'The event has ended!';
        }
    }, 1000);
});
