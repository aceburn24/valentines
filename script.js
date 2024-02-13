let messages = [
    "Are you sure? 😏",
    "Pagisipan mo mabuti 😉",
    "Sige na pleasee yes mo naaa 😄",
    "Pretty please? 🥺",
    "I'll take that as a maybe... 😜",
    "Hindi mo na ko love 🥺"
];

let messageIndex = 0;

document.getElementById('noBtn').addEventListener('click', function() {
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
    // Add the GIF when 'No' is clicked
    document.getElementById('gif').src = "https://media1.tenor.com/m/XUsA6TGlwZ4AAAAC/bebi-jem.gif";
});


document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('message').innerHTML = "Waa I love you lalab ko"; // Display a loving message
    document.getElementById('bgVideo').style.display = 'block'; // Show the video
    // Add the GIF when 'Yes' is clicked
    document.getElementById('gif').src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
});


