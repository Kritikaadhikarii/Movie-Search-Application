    // https://www.omdbapi.com/?s=game&apikey=820658f7
    // http://www.omdbapi.com/?i=tt3896198&apikey=820658f7
    async function fetchData(){
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=820658f7');
        const datas = await response.json();
        console.log(datas)
        var titlevar = document.getElementById("Title")
        titlevar.textContent = datas.Title;

        var typevar = document.getElementById("Type")
        typevar.textContent = datas.Type;

        var yearvar = document.getElementById("Year")
        yearvar.textContent = datas.Year;

        var plotvar = document.getElementById("Plot")
        plotvar.textContent = datas.Plot;


        var image = document.getElementById("Poster")
        image.src = datas.Poster;

        // for search

        var searchbtn= document.getElementById("search")
        searchbtn.addEventListener('click',async function(){
        var inputfield = document.getElementById("movie").value 
        console.log(inputfield)

        // inputfield.innerhtml='';

        // // use if else
        // if (inputfield === '');

        const response = await fetch(`http://www.omdbapi.com/?s=${inputfield}&apikey=820658f7`);
        const datas = await response.json();
        console.log(datas.Search[0])
        var titlevar = document.getElementById("Title")
        titlevar.textContent = datas.Search[0].Title;

        var typevar = document.getElementById("Type")
        typevar.textContent = datas.Search[0].Type;

        var yearvar = document.getElementById("Year")
        yearvar.textContent = datas.Search[0].Year;

        var plotvar = document.getElementById("Plot")
        plotvar.textContent = datas.Search[0].Plot;

        var image = document.getElementById("Poster")
        image.src = datas.Search[0].Poster;

       })

}



fetchData();