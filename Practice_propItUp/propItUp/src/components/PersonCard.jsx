
const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;

    return(
        <div className = "personCard">
            <h2>{firstName}, {lastName}</h2>
            <h4>Age: {age}</h4>
            <h4>Hair Color: {hairColor}</h4>
        </div>
    )

} 

export default PersonCard