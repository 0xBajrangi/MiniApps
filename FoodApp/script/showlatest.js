



async function getLatest(url) {
    let res = await fetch(url);

    let data = await res.json();
showlatest(data);
}

function showlatest({ meals }) {
    let parent = document.getElementById("latest");
    parent.innerHTML = null;

    meals.forEach((m) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = m.strMealThumb;
            
            let title = document.createElement("h3");
        title.innerText = m.strMeal;
        div.append(img, title);
        parent.append(div);


        div.addEventListener("click", () => {
            let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${m.idMeal}`;
            import("./recepie.js").then((res) => {
                res.latestRecepie(url);
                parent.innerHTML = null;
            })
            


        })
    })



}

export { getLatest };