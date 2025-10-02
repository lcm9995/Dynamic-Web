import axios from 'axios'
const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID API_ACCESS_TOKEN',
    },
    params: {query: 'new york'},
  })
  console.log(response)
  // all we care about is the data.results array within our response, so let's only return that!
  return response.data.results
}
export default searchImages
