import React from 'react'
import {useState} from 'react'

const SearchBar = (props) => {
    const {onSubmit} = props
    const [term, setTerm]=useState('')
    const handleFormSubmit = (event) => {
        // disabl the form input collection built in to html 
        //which disabls the built in page refresh
        event.preventDefault()
    }
    handleChange = (event) => {
        setTerm(event.target.value)
        //event.preventDefault()
        //onSubmit()
    }
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" onChange={handleChange} value={term}/>
        </form>
    </div>
    )
}
export default SearchBar