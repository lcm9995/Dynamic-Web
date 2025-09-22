import Button from './components/Button'

const Button = (props) => {
    const {children} //props is an object, want to pull out the key children 
    // { } say we're inserting javascript here 
    return <button>{children}</button>
}

export default Button