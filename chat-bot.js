const tmi = require('tmi.js');

// Ersetze diese Werte durch deine eigenen
const opts = {
    identity: {
        username: 'reblgamebot',
        password: 'y8pvgg5ly5yws391m60jmar1c33nd4' // OAuth-Token siehe https://twitchapps.com/tmi/
    },
    channels: [
        'reblgame'
    ]
};

const client = new tmi.Client(opts);

client.connect();

client.on('message', (channel, userstate, message, self) => {
    if (self) return;

    // Überprüfe, ob der Befehl !drehen gesendet wurde
    if (message.toLowerCase() === '!drehen') {
        // Überprüfe, ob der Benutzer berechtigt ist
        const authorizedUsers = ['streamer_username', 'mod1', 'mod2']; // Füge hier die Benutzernamen von Moderatoren und dem Streamer hinzu
        if (authorizedUsers.includes(userstate.username) || hasGiftedSubs(userstate.username)) {
            // Führe die Funktion zum Drehen des Rades aus
            // Diese Funktion musst du auf dem Client ausführen
            client.say(channel, `@${userstate.username} hat das Rad gedreht!`);
            sendSpinCommand();
        } else {
            client.say(channel, `@${userstate.username} ist nicht autorisiert, das Rad zu drehen.`);
        }
    }
});

// Dummy-Funktion zum Überprüfen, ob der Benutzer Subs geschenkt hat
function hasGiftedSubs(username) {
    // Hier solltest du deinen eigenen Code implementieren, um zu überprüfen, ob der Benutzer mindestens 5 Subs geschenkt hat
    return false;
}

// Funktion zum Senden eines Befehls an den Client
function sendSpinCommand() {
    // Hier sendest du einen Befehl an deinen Client, um das Rad zu drehen
    // Dies hängt davon ab, wie du deinen Client einrichtest
    // Hier könnte ein WebSocket-Befehl oder ein anderer Mechanismus verwendet werden
}
