// List of movies
let movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "tt0137523",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "tt0111161",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: 9,
    id: "tt0167260",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "tt0068646",
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: 5,
    id: "tt0060196",
  },
  {
    title: "The Godfather: Part II",
    rank: 3,
    id: "tt0071562",
  },
  {
    title: "The Dark Knight",
    rank: 6,
    id: "tt0468569",
  },
  {
    title: "Pulp Fiction",
    rank: 4,
    id: "tt0110912",
  },
  {
    title: "Schindler's List",
    rank: 8,
    id: "tt0108052",
  },
  {
    title: "12 Angry Men",
    rank: 7,
    id: "tt0050083",
  },
];

window.onload = function () {
  displayMovies(movies);
  let x = document.getElementsByClassName("sort");
  for (let i = 0; i < x.length; i++) {
    x[i].style =
      "padding : 5px 10px; background : #22bb33;border-radius:10px ;";
  }

  document
    .getElementById("sort-rank")
    .addEventListener("click", sortMoviesByRank);
  document
    .getElementById("sort-name")
    .addEventListener("click", sortMoviesByName);
  document.getElementById("sort-id").addEventListener("click", sortMoviesById);
};

function displayMovies(movies) {
  let table = "<table border = 4 style = 'width :100%'> ";
  table += "<tr><th>Id</th><th>Name</th><th>Rank</th></tr>";
  for (let i = 0; i < movies.length; i++) {
    table += "<tr>";
    table += `<td>${movies[i].id}</td><td>${movies[i].title}</td><td>${movies[i].rank}</td>`;
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("movies-list").innerHTML = table;
}

function sortMoviesByRank() {
  for (let j = 0; j < movies.length - 1; j++) {
    let max_obj = movies[j];
    let max_location = j;

    for (let i = j + 1; i < movies.length; i++) {
      if (movies[i].rank > max_obj.rank) {
        // Know max AND it's index (location)
        max_obj = movies[i];
        max_location = i;
      }
    }
    // swap the first and the last
    movies[max_location] = movies[j]; // --> 10
    movies[j] = max_obj;
  }
  displayMovies(movies);
}

function sortMoviesByName() {}

function sortMoviesById() {}
