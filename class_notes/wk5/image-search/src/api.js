import axios from 'axios'
axios.get('<API URL LOCATION>', {
    headers: {
      MAYBE SOME AUTHENTICATION HERE
    },
    params: {
      SOME SEARCH PARAMETERS HERE
    },
  })
 const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID YOUR_API_KEY_HERE_DO_NOT_PUBLISH',
    },
    params: {query: 'butterflies'},
  })
  console.log(response)
  // all we care about is the data.results array within our response, so let's only return that!
  return response.data.results
}