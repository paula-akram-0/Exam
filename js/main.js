let key = "e44b05b1c85173e47e807d928df5ca14"
let categoryMovies = ["top_rated","popular","now_playing","upcoming"]


let popular = "upcoming"
var searchValue = "The Northman"
let urlmovie =`https://api.themoviedb.org/3/trending/all/day?api_key=e44b05b1c85173e47e807d928df5ca14`


let links = document.querySelectorAll(".link a")
console.log(links)


for(var i = 0 ; i<links.length ; i++){
    links[i].addEventListener("click",function(e){
       var  category=e.target.getAttribute("results")
       console.log(category)
       getdataMovie(category)
    })
}

let trending = document.getElementById("trending")
trending.addEventListener("click",function(){
    getdataTrending()
})

let myHttp = new XMLHttpRequest()

function getdataTrending(){
    myHttp.open("GET",`https://api.themoviedb.org/3/trending/all/day?api_key=e44b05b1c85173e47e807d928df5ca14`)
myHttp.send()
myHttp.addEventListener("readystatechange",function(){

    if(myHttp.readyState == 4 && myHttp.status ==200){
        list =JSON.parse(myHttp.response).results
        displayapi()
        
    }
})
}
let list =[]
function getdataMovie(popular){
myHttp.open("GET",`https://api.themoviedb.org/3/movie/${popular}?api_key=e44b05b1c85173e47e807d928df5ca14&language=en-US`)
myHttp.send()
myHttp.addEventListener("readystatechange",function(){

    if(myHttp.readyState == 4 && myHttp.status ==200){
        list =JSON.parse(myHttp.response).results
        displayapi()
        
    }
})
}
getdataMovie(popular)

function searchMovies(searchValue){
myHttp.open("GET",` https://api.themoviedb.org/3/search/movie?api_key=e44b05b1c85173e47e807d928df5ca14&query=${searchValue}`)
myHttp.send()
myHttp.addEventListener("readystatechange",function(){

    if(myHttp.readyState == 4 && myHttp.status ==200){
        list =JSON.parse(myHttp.response).results
        displayapi()
        
    }
})
}

function searchCollection(searchValue){
    myHttp.open("GET",` https://api.themoviedb.org/3/search/collection?api_key=e44b05b1c85173e47e807d928df5ca14&query=${searchValue}`)
    myHttp.send()
    myHttp.addEventListener("readystatechange",function(){
    
        if(myHttp.readyState == 4 && myHttp.status ==200){
            list =JSON.parse(myHttp.response).results
            displayapi()
            
        }
    })
    }



function displayapi(){
    var temp =""
    for(var i =0 ; i< list.length ; i++){
        temp +=`                        <div class="items col-md-4">
                <img src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" width="100%" alt="">
                <div class="layer">
                    <h1>${list[i].title}</h1>
                    <p>${list[i].overview}</p>
                    <h4>rate:${list[i].vote_average}</h4>
                    <h4>${list[i].release_date}</h4>
                </div>
            </div>

    `
    }
    document.getElementById("show").innerHTML = temp
}

let searchInput1 = document.getElementById("searchInput1")
searchInput1.addEventListener('keyup',function (){

    let searchValue =searchInput1.value
    searchMovies(searchValue)
})

let searchInput2 = document.getElementById("searchInput2")
searchInput2.addEventListener('keyup',function (){

    let searchValue =searchInput2.value
    searchMovies(searchValue)
})
























