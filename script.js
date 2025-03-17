const messages = [
    "Deepti, you’re the warmest hug on the coldest day. Love you! ❤️",
    "You’re my forever bestie—nothing beats our bond! ⭐",
    "Every laugh with you is a treasure, Deepti! ❤️",
    "You’re the sprinkle of magic in my life. Always stay you! ⭐",
    "Deepti, your smile is my favorite thing in the world. ❤️",
    "With you, every moment feels like home. ⭐",
    "You’re my heart’s happiest beat, Deepti! ❤️",
    "Here’s a gift for you: my endless love, Deepti! ⭐",
    "Deepti, I just want to kiss you and hug you forever! ❤️⭐"
];

let messageIndex = 0;

document.getElementById("warmBtn").addEventListener("click", function() {
    alert(messages[messageIndex]);
    messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages
});