import { getMovies, getById, addMovie, deleteMovie, getMoviesFromAPI } from "./db";

const resolvers = {
	Query: {
		movies: () => getMovies(),
		movie: (_, { id }) => getById(id),
		movies_from_api: (_, { limit, rating }) => getMoviesFromAPI(limit, rating)
	},
	Mutation: {
		addMovie: (_, { name, score }) => addMovie(name, score),
		deleteMovie: (_, { id }) => deleteMovie(id)
	},
}

export default resolvers;