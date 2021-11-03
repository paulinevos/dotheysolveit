module.exports = {
  movieDatabase: {
    apiKey: process.env.REACT_APP_TMDB_API_KEY,
    baseUrl: 'https://api.themoviedb.org/3/',
    genreIds: [80, 99, 9648],
    mediaTypes: ['movie', 'tv']
  }
}
