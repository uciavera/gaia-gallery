import axios from 'axios'

const API_KEY = 'ed9aeed6915893540672706939818b0c';
const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.'

const url1 = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ed9aeed6915893540672706939818b0c&gallery_id=72157647915728815&format=json&nojsoncallback=1'
// https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ed9aeed6915893540672706939818b0c&format=rest'
const configuration = {
    https: true,
    url: "https://vet-booking.herokuapp.com",
    endpoint: {
      // user
      
  
      clinic: {
        all: "/clinic", // [GET] all clinic or [DELETE] clinic
        add: "/clinic/add", // [POST] add animal
        delete: "/clinic/remove", // [DELETE] clinic by id
        facility: "clinic/facility", // [POST] and [DELETE] clinic facility
        filter: "clinic/filter", // [GET] filter by city
      }
  
      
    },
  };


const getImage = ({
    method = null
})=> {
  if (method ===  'getRecent') {
      return axios.get(
          'https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ed9aeed6915893540672706939818b0c&format=rest'
        //   `${url}getRecent&api_key=${API_KEY}&format=rest`
      ).then(res => res)
      .catch(err => err.response) 
  } 
}
const clinic = ({
    method = null,
    data = null,
    access_token = null,
    query = null }) => {
    if (method === "all") {
      return axios.get(
        `${configuration.url}${configuration.endpoint.clinic.all}`
      ).then(res => res)
        .catch(err => err.response)
    }}   
export {
    getImage, clinic
}