let messages = [
    "Are you sure? 😏",
    "Pagisipan mo mabuti 😉",
    "Sige na pleasee yes mo naaa 😄",
    "Pretty please? 🥺",
    "I'll take that as a maybe... 😜",
    "Hindi mo na ko love 🥺"
];

let messageIndex = 0;
let scaleFactor = 1; // Initialize scale factor
let yesButton = document.getElementById('yesBtn');
let noButton = document.getElementById('noBtn');

noButton.addEventListener('click', function() {
    let messageElement = document.getElementById('message');
    messageElement.style.opacity = '0';
    setTimeout(function() {
        messageElement.innerHTML = messages[messageIndex];
        messageElement.style.opacity = '1';
        messageIndex++;
        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }
    }, 500);
    document.getElementById('gif').src = "https://media1.tenor.com/m/XUsA6TGlwZ4AAAAC/bebi-jem.gif";

    // Increase the size of the 'Yes' button
    scaleFactor += 0.1; // Increase scale factor
    yesButton.style.transform = 'scale(' + scaleFactor + ')';

    // Move the 'No' button to evade the enlarging 'Yes' button
    noButton.style.transform = `translateX(${scaleFactor * 50}px)`; // Adjust the value to ensure enough space
});

yesButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = "Waa I love you lalab ko";
    document.getElementById('bgVideo').style.display = 'block';
    document.getElementById('gif').src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";

    // Reset the size of the 'Yes' button
    scaleFactor = 1;
    yesButton.style.transform = 'scale(1)';
    noButton.style.transform = 'translateX(0px)'; // Reset the position of the 'No' button
});
