document.getElementById('actionButton').addEventListener('click', function () {
    const txtDiv = document.getElementById('txt');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    txtDiv.textContent = formattedDate;
});

function updateTime() {
    const button = document.getElementById('actionButton');
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString('pt-BR');
    button.textContent = formattedTime;
    setTimeout(updateTime, 1000);
}

updateTime();
