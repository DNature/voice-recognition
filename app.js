const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'im good you little piece of love',
    'Doing good homeboi',
    'Leave me alone'
];

const weather = [
    'weather is fine',
    'why do you care, you never leave the house anyway!'
];

window.SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;
const SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;

if ('SpeechRecognition' in window) {
    console.log('speech recognition API supported');
} else {
    console.log('peech recognition API not supported');
}

const recognition = new SpeechRecognition();

// const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('voice is activated');
};

recognition.onresult = event => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

readOutLoud = message => {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';

    if (message.includes('how are you')) {
        const answer = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = answer;
    }
    // else if (message.includes('outside')) {
    //     const answerW = weather[Math.floor(Math.random() * weather.length)];
    //     speech.text = answerW;
    // }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};