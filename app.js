document.querySelector(".command-btn").addEventListener("click", function () {
    document.querySelector(".command-list").classList.add("active");
    this.style.display = "none";
})

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".command-list").classList.remove("active");
    document.querySelector(".command-btn").style.display = "block"; 
})


if ("webkitSpeechRecognition" in window) {
    const d = new Date() // today, now

    // setInterval(function name1(){
    //     var time = d.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')
    // }, 1000)
    

    // console.log(name1())


    //  time = d.toLocaleTimeString();
    // Timezone zero UTC offset
    var date = d.toISOString().slice(0, 10) // YYYY-MM-DD


    // Speech Recognition Stuff goes here
    const btn = document.querySelector(".sound-icon");
    // const content = document.querySelector(".content");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onstart = function () {
        console.log("voice is activated, you can to microphonne");
    }


    recognition.onresult = function (event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;

        // content.textContent = transcript;
        readOut(transcript);
        console.log(transcript)
    }

    // add the listener to the btn

    btn.addEventListener("click", () => {
        btn.classList.add("active");
        recognition.start();
    })
    var synth = window.speechSynthesis;
    function readOut(massage) {
        btn.classList.remove("active");

        let speech = new SpeechSynthesisUtterance();

        if (massage.includes("how are you")) {
            speech.text = "I am fine";
        }
        else if (massage.includes("your name")) {
            speech.text = "I don't have a name at the moment!";
        }
        else if (massage.includes("made you")) {
            speech.text = "I was created by Tawfiq, He is a full-stack web developer.";
        }
        else if (massage.includes("Assalam") || massage.includes("Walekum")) {
            speech.text = "Waalaykumu s-salam. How can I help you?";
        }
        else if (massage.includes("what are you doing")) {
            speech.text = "I am talking to you right now";
        }
        else if (massage.includes("your birthday")) {
            speech.text = "Sunday, March 27, 2022";
        }
        else if (massage.includes("good night")) {
            speech.text = "Good Night. Have a sweet dream";
        }
        else if (massage.includes("good morning")) {
            speech.text = "Good Morning.";
        }
        else if (massage.includes("thank you")) {
            speech.text = "You are most welcome";
        }
        else if (massage.includes("love you")) {
            speech.text = "I love you too but as a friend";
        }
        else if (massage.includes("I want to")) {
            speech.text = "ok I redirect you to my sir Facebook account";
            window.open("https://www.facebook.com/developertawfik", "_blank");
        }
        else if (massage.includes("best man")) {
            speech.text = "muhammad sallallahu alaihi wasallam";
        }
        else if (massage.includes("today date")) {
            speech.text = `${date}`;
        }
        // else if (massage.includes("time")) {
        //     speech.text = `${time}`;
        // }
        else {
            speech.text = "Sorry I didn't understand Please repeat again.";
        }



        speech.pitch = 1;
        speech.volume = 1;
        speech.rate = 1;

        window.speechSynthesis.speak(speech);
        console.log(speech)
    }
} else {
    console.log("Speech Recognition Not Available")
}