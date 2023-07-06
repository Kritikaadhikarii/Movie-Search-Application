    // https://www.omdbapi.com/?s=game&apikey=820658f7
    // http://www.omdbapi.com/?i=tt3896198&apikey=820658f7

    const movieContainer = document.getElementById("movie-container");


    const search = document.getElementById("search");


async function loadMoreData(){
    var inputfield = document.getElementById("movie").value 
    console.log(inputfield)
    const response = await fetch(`http://www.omdbapi.com/?s=${inputfield}&apikey=820658f7`);
    const datas = await response.json();

    for(let i =0; i<datas.Search.length;i++){
        const movieData = datas.Search[i];

        const card = document.createElement("div");
        card.className = "card";

        const movieTitle = document.createElement("h1");
        movieTitle.className = "title";
        movieTitle.innerHTML = movieData.Title
        card.appendChild(movieTitle)

        movieContainer.appendChild(card)
    }

}

search.addEventListener("click",()=>{
    loadMoreData();
})


//  fetchData()