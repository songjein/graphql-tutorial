// export const people = [{
// 		id: 1,
// 		name: "jeinsong",
// 		age: 22,
// 		gender: "male",
// 	},
// 	{
// 		id: 2,
// 		name: "songjein",
// 		age: 24,
// 		gender: "male",
// 	},
// 	{
// 		id: 3,
// 		name: "jesongin",
// 		age: 23,
// 		gender: "female",
// 	}
// ];


// export const getById = id => {
// 	const filteredPeople = people.filter(person => person.id === id);
// 	return filteredPeople[0];
// }

let movies = [
	{
		id: 0,
		name: "Star Wars - The new one",
		score: 1
	},
	{
		id: 1,
		name: "Avengers - The new one",
		score: 8
	},
	{
		id: 2,
		name: "The Godfather I",
		score: 99,
	},
	{
		id: 3,
		name: "Logan",
		score: 2,
	}
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovies = movies.filter(movie => movie.id === id);
	return filteredMovies[0];
}

export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter(movie => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
}

export const addMovie = (name, score) => {
	const newMovie = {
		id: movies.length + 1,
		name,
		score,
	}
	movies.push(newMovie);
	return newMovie;
}


// Wrapping Movie API
import axios from "axios"
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIES_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`

export const getMoviesFromAPI = async (limit, rating) => {
	const {
		data: {
			data: { movies }
		}
	} = await axios(LIST_MOVIES_URL, {
		params: {
			limit,
			minimum_rating: rating
		}
	});
	return movies;
}

export const getMovieFromAPI = async id => {
	const {
		data: {
			data: { movie }
		}
	} = await axios(MOVIES_DETAIL_URL, {
		params: {
			movie_id: id
		}
	});
	return movie;
}

export const getSuggestionsFromAPI = async id => {
	const {
		data: {
			data: { movies }
		}
	} = await axios(MOVIE_SUGGESTIONS_URL, {
		params: {
			movie_id: id
		}
	})
	return movies;
}
