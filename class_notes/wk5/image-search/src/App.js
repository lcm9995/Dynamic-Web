import searchImages from './api'

export default function App() {
  const [term, setTerm]=useState('')
  return <div>
    <h3>Type a search term and hit the enter key to submit!</h3>
    <SearchBar onSubmit={()=> console.log('submitted')}/> 
  </div>
}
const images = searchImages()
console.log(images)