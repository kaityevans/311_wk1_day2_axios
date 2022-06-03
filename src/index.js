// import axios here
const axios = require('axios')

require('dotenv').config()

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = process.env.API_KEY




const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  axios(url).then(res => console.log(res.data.results[0].title))
  return axios(url)
}
discoverMovie()

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios(url).then(res => console.log(res.data.title))
  return res.data
}
getMovieById(500)

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}