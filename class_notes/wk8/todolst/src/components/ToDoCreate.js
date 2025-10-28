import {useState} from 'react'

const ToDoCreate = () => {
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value)

    }
    const handleSubmit = (event) => {
        event.preventDefault()



    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {title} onChange ={handleChange}/>
            <button> Create Todo</button>
        </form>
    )
}
export default ToDoCreate;