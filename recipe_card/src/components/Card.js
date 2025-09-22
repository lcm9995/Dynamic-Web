import './RecipeCard.css'

const Card = (props) =>{
    //const children = props.children //built in prop? 
    const {children} = props
    return <div className="card">{children}</div>
}
export default Card 
