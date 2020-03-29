import { getMovies, getById, addMovie, deleteMovie, getMoviesFromAPI, getMovieFromAPI, getSuggestionsFromAPI } from "./db";

const resolvers = {
	Query: {
		movies: () => getMovies(),
		movie: (_, { id }) => getById(id),
		movies_from_api: (_, { limit, rating }) => getMoviesFromAPI(limit, rating),
		movie_from_api: (_, { id }) => getMovieFromAPI(id),
		suggestions_from_api: (_, { id }) => getSuggestionsFromAPI(id),
	},
	Mutation: {
		addMovie: (_, { name, score }) => addMovie(name, score),
		deleteMovie: (_, { id }) => deleteMovie(id)
	},
}

export default resolvers;