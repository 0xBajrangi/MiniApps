 async function latestRecepie(url){
        let res = await fetch(url);

        let data = await res.json();

        

        import("./showmeal.js").then((res)=>{
            res.showMeal(data.meals[0]);
        })

}
    

export { latestRecepie };