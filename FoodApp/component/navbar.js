function navbar() {
    return `<div>
                <a href="index.html"><h1>Get A Recipe</h1></a>
            </div>
            <div id="nav-items">
                <div><input type="text" name="" id="search" placeholder="Search for">
                <div id="searchResult" ></div></div>

                <div><a href="recepie.html">Recipe of Day</a></div>
                <div><a href="Latest.html">Latest Recipe</a></div>
            </div>`;
    
}
async function searchFood() {
    let search = document.getElementById("search").value
    let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    // console.log(res)
    let data = await res.json();
     console.log(data.meals);
    appendToSearch(data,search)

    
}
let timeout;
function debounce(delay) {

    console.log(timeout)
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
        searchFood();
    }, delay);
}

function appendToSearch({ meals },search) {
    // console.log(meals)
    let div = document.getElementById("searchResult");
    if (search.length == 0) {
        div.style.display = "none"
        return;
        
    } else {
        div.style.display = "block"
    }

    div.innerHTML = null;

    if (meals === null) {
        div.innerHTML = `<p>No search result<p>`;
        return;
    }
    
    meals.forEach((m) => {
        
        let name = document.createElement("p");
        name.innerText = m.strMeal;

        div.append(name);
          // importing show search from script/showmeal.js
        name.addEventListener("click", () => {
            import("../script/showmeal.js").then((res) => {
                res.showMeal(m);
            })
        })

    })

    
}


export { navbar ,searchFood,debounce};