function showMeal(m) {
     document.getElementById("searchResult").style.display = "none";
    console.log(m);

    let parent = document.getElementById("Meal");
    parent.innerHTML = null;
    
    let name = document.createElement("h2");
    name.innerText = m.strMeal;

    let img = document.createElement("img");
    img.src = m.strMealThumb;

    let measure = {};
    for (let i = 1; i <= 20; i++){
        let quant = `strMeasure${i}`;
        let ingridient = `strIngredient${i}`;
        measure[m[ingridient]] = m[quant];
        
    }
    let ingridient = document.createElement("h3")
    ingridient.innerText = "Ingridients";

    let inst = document.createElement("h3")
    inst.innerText = "Instruction";

    let instruction = document.createElement("p");
    instruction.innerText = m.strInstructions;

    let video = document.createElement("div");
    video.innerHTML = `<iframe width="800" height="400" src="https://www.youtube.com/embed/${m.strYoutube.split("=")[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
       
    let ingri_div = document.createElement("div");
    for (let key in measure) {
        let p = document.createElement("p");
        p.innerText = key + "-" + measure[key];
        ingri_div.append(p);
    }

    parent.append(name, img, ingridient, ingri_div,inst,instruction,video);

  


    
}

export {showMeal}

