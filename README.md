# FE21-CR04-Philip
Requirements:
In this Code Review, your job is to create a list of movies for a “Movie factory” website. Information about the movies should be stored in a JSON file.
- Correct HTML, CSS and JavaScript code structure and code indentation.
-  Use bootstrap to help you create the provided design. You can complement your design with CSS/SASS/SCSS, but at least the container holding the film information should use bootstrap classes for responsiveness. The container should have 3 columns in a row for larger screens, 2 columns in a row on medium screens (provided layout) and 1 column in a row on small/extra small screens.
- Correct creation of JSON file to hold movies’ data. Please note that for this task you can provide the information/data of any movie you want. E.g:  
{
    "movieName": "A Star is Born",
    "image": "img/star.jpg",
    "description": "Short description",
    "likes": 0,
}

- Correct creation of the HTML/Bootstrap structure dynamically using JavaScript (please do not hard code, elements should be created by JavaScript not written in the HTML file). The following should be shown on the screen: the movie name, a short description, movie poster according to the provided design. Feel free to expand the information as: genre, release date, etc...
- As it is in the example template, there should be a button to every movie that calls a function which will increment the movie’s “likes” property (in the array of objects where the json data was parsed) on every button click.
- Every time the “Like” button is clicked, the number of “likes” (the number shown next to the “Like” button in the template) should increase by one.


Bonus Points:
- Add a Sort button that will sort the resulting list of movies according to their current like property status (e.g. on descending order of likes).
