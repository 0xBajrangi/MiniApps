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
