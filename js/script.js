var movie_list = JSON.parse(movies); // convert string into an object
const movie_list_backup = JSON.parse(movies);

function IncreaseLikes(index) {
    // increase current like by 1
    movie_list[index]["likes"]++;

    // log for debugging
    console.log(movie_list[index]["moviename"], movie_list[index]["likes"]);

    // update current like-count
    document.getElementsByClassName("own-circle-size")[index].innerHTML = movie_list[index]["likes"];

}

var is_sort = false;
var iclick = 0; // count current click
function SortMovies() {  
    switch (iclick%3) {
        case 0: // high to low
            is_sort = true;
            movie_list.sort((a, b) => {
                return b["likes"] - a["likes"];
            });         
            break;
        case 1: // low to high
            is_sort = true;
            movie_list.sort((a, b) => {
                return a["likes"] - b["likes"];
            });      
            break;
        default: // restored
            is_sort = false;
            movie_list = movie_list_backup;
    }

    CreateMovieCards();
    iclick++;
}


var movie_id_element = document.getElementById("moviecards");
const CreateMovieCards = () => {
    movie_id_element.innerHTML = "";
    var movie_string = "<div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-1 mx-lg-4 mb-4\">"; // START MOVIE GRID
    for (let movie of movie_list) {
        movie_string += "<div class=\"col\">"; // Start column-container for each movie
        movie_string += "   <div class=\"card h-100 p-2 own-cn-color text-white\">"; // Start styling movie card
        movie_string += "       <div class=\"row g-0\">"; // start row for card to get side-by-side look w/ >= tablet
    
        // Fixed solution because time...
        movie_string += `
        <div class="col-md-4 my-auto">
            <img src="${movie["image"]}" class="img-fluid card-img" alt="${movie["moviename"]}">
        </div>
        <div class="col-md-8 m-0 p-0">
            <div class="card-body m-0 p-2">
                <h5 class="card-title text-center">${movie["moviename"]}<hr /></h5>
                <p class="card-text p-1"><small>${movie["description"]}</small><hr /></p>
                <div class="d-flex flex-row justify-content-center align-items-center justify-content-md-end">
    
                    <div class="own-like-text-color align-self-center text-center m-2 m-md-1">Like</div>
                    <div class="ownLikeClick btn own-like-text-color align-self-center text-center m-2 m-md-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="own-svg-size bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                        </svg>
                    </div>
    
                    <span class="own-circle-size align-self-center text-center my-1 mx-auto m-2 m-md-0">${movie["likes"]}</span>
                </div>    
            </div>
        </div>    
        `;
    
        movie_string += "       </div>";  // End row for card to get side-by-side look w/ >= tablet
        movie_string += "   </div>"; // End styling movie card
        movie_string += "</div>"; // End column-container for each movie
    }    

    movie_string += "</div>"; // END MOVIE GRID
    movie_id_element.innerHTML += movie_string;

    var like_class_elements = document.getElementsByClassName("ownLikeClick");
    for (let i=0; i < like_class_elements.length; i++) {
        like_class_elements[i].addEventListener("click", function () {
            IncreaseLikes(i);
        })
    }    
}


// build header element
document.getElementById("sortarea").innerHTML = `
    <div class="container text-white text-center p-3 my-0 ms-auto me-1">
        <div class="row m-0 p-0">
            <div class="col">
            </div>
            <div class="col align-self-center m-1 p-0">
            <h2>Movies</h2>
            </div>
            <div class="btn text-white col align-self-center text-end m-1 p-0" id="ownSorting">
                <div class="d-flex flex-row justify-content-center justify-content-md-end m-0 p-0">
                    <h4 class="align-self-center m-0 p-0">Sorting</h4> 
                </div>
            </div>
        </div>
    </div>   
    `;


// create movie cards on refresh
if (movie_id_element.innerHTML.length == 0) CreateMovieCards();

var sort_id_element = document.getElementById("ownSorting");
sort_id_element.addEventListener("click", function () {
    SortMovies();
})







