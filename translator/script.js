async function Translate() {
    let input = document.getElementById("input").value;
    // console.log(input)
    let output = document.getElementById("output").value;
    // console.log(output)
    let text = document.getElementById("input-text").value;
    // console.log(text);
    let parent = document.getElementById("answer");
    parent.innerText = null;

    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: text,
		source: input,
		target: output
	}),
	headers: { "Content-Type": "application/json" }
});

    let answer = await res.json();
    console.log(answer)
    parent.innerText = answer.translatedText;
    
}



function getText() {
    
    let ans;
    let text = new Promise((resolve, reject) => {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = "en-GB";

        recognition.onresult = function (event) {
        
           setTimeout(() => {
               resolve(event);
           }, 2000); 
          
        }
        recognition.start();
        
    });
        text.then(({results:res}) => {
            // console.log(res[0][0].transcript);
            bySpeech(res[0][0].transcript);
    })



}


async function bySpeech(text) {
 
    let output = document.getElementById("output").value;
    // console.log(output)

    let parent = document.getElementById("answer");
    parent.innerText = null;

    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: text,
		source: "en",
		target: output
	}),
	headers: { "Content-Type": "application/json" }
});

    let answer = await res.json();
    // console.log(answer)
    parent.innerText = answer.translatedText;
    
}
