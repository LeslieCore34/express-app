const express = require("express");
const app = express();
const port = 5000;

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        director: "Orson Wells",
        year: "1941",
        colors: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: "1972",
        colors: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        colors: true,
        duration: 180,
    },
];

app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.log(`Server is listening on ${port}`);
    }
});


const welcome = (req, res) => {
    res.send("Welcome to my favourite movie list");
};
app.get("/", welcome);


const moviList = (req, res) => {
    res.status(200).json(movies);
};
app.get("/api/movies", moviList);


const movieListID = (req, res) => {

    const movieID = parseInt(req.params.id);

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === movieID) {
            res.status(200).json(movies[i].title);
            return;
        }
    }
    res.status(404).send("Not Found");

};
app.get("/api/movies/:id", movieListID);


// // Créer une route GET /api/movies/:id qui ne retournera que le film correspondant à l'id défini dans l'url (tu peux parcourir le tableau movies avec une boucle for,
// ou utiliser la méthode .find())
// S'il y a un film qui correspond aux paramètres, renvoie une réponse avec un statut 200 et le film correspondant comme objet json
// Sinon, renvoie un statut 404 avec un message "Not Found".