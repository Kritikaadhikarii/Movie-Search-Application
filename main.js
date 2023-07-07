    // https://www.omdbapi.com/?s=game&apikey=820658f7
    // http://www.omdbapi.com/?i=tt3896198&apikey=820658f7

    const movieContainer = document.getElementById("movie-container");


    const search = document.getElementById("search");


async function loadMoreData(){
    var inputfield = document.getElementById("movie").value 
    console.log(inputfield)

    movieContainer.innerHTML = '';
    //this resolved the issue of search button not working after one search

    const response = await fetch(`https://www.omdbapi.com/?s=${inputfield}&apikey=820658f7`);
    const datas = await response.json();

    if(inputfield === ""){
        // fetchData()
    }else{
        for(let i =0; i<datas.Search.length;i++){
            const movieData = datas.Search[i];
    
            const card = document.createElement("div");
            card.className = "card";
    
            const movieTitle = document.createElement("h1");
            movieTitle.className = "title";
            movieTitle.innerHTML = movieData.Title
            card.appendChild(movieTitle)
    
            const movieYear = document.createElement("h2");
            movieYear.className = "Year";
            movieYear.innerHTML = movieData.Year
            card.appendChild(movieYear)
    
            const imdbID = document.createElement("h3");
            imdbID.className = "imdbID";
            imdbID.innerHTML = movieData.imdbID
            card.appendChild(imdbID)
    
            const movieType = document.createElement("h2");
            movieType.className = "Type";
            movieType.innerHTML = movieData.Type
            card.appendChild(movieType)
    
            const movieImage = document.createElement("img");
            movieImage.className = "Poster";
            movieImage.src = movieData.Poster;
            movieImage.alt = movieData.Title;
            card.appendChild(movieImage);
    
    
            movieContainer.appendChild(card)
        }

    }

  

    
// ------------------------------------------------------
  if (!datas || !datas.Search) {
    const errorCard = document.createElement("div");
    errorCard.className = "ecard";

    const errorMessage = document.createElement("h1");
    errorMessage.className = "error-message";
    errorMessage.innerHTML = "404 Error: Movie not found. Try Again!";
    errorCard.appendChild(errorMessage);
    alert("404 error")

    movieContainer.appendChild(errorCard);
    return;
    
  }
// ------------------------------------------------





//   ---------

// --------------------------------------------------------


 

}


async function fetchData(){
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=820658f7');
    const datas = await response.json();
    console.log(datas)

    const card = document.createElement("div");
    card.className = "card";


    var titlevar = document.createElement("h1");
    titlevar.innerHTML = datas.Title;
    card.appendChild(titlevar)

    var typevar = document.createElement("h2");
    typevar.innerHTML = datas.Type;
    card.appendChild(typevar)

    var yearvar = document.createElement("p")
    yearvar.innerHTML = datas.Year;
    card.appendChild(yearvar)

    var image = document.createElement("img")
    image.src = datas.Poster;
    card.appendChild(image)

    movieContainer.appendChild(card)
}



search.addEventListener("click",()=>{
    loadMoreData();
})

window.addEventListener('load',()=>{
    fetchData()
})


