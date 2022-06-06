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
  let results = axios(url).then((res) => {
    console.log(res.data.original_title)
    return res.data
  })
  return results
}
getMovieById(500)
// /*  */
const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here/*  */
  let results = axios(url)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err.response.status)
      return err.response.status
    })
  return results
}
getMovieByIdFailure()


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}