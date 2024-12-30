import { useState } from 'react'


const PersonComponent = ({person}) => {

    const {firstName, lastName, age, hairColor} = person;
    const [currentAge, setCurrentAge] = useState(age)

    const ageIncrement = () =>{
        setCurrentAge ( prev => prev +1);
    }

    return (
        <div className = "person">
            <h1>{ firstName } , { lastName }</h1>
            <p>Age: { currentAge } </p>
            <p>hair Color: { hairColor }</p>
            <button onClick={ ageIncrement }>Birthday Button for { firstName } { lastName }</button>
        </div>
    )
}

export default PersonComponent;

const PersonComponent = (prop) => {

    const {firstName, lastName, age, hairColor} = prop;
    const [currentAge, setCurrentAge] = useState(age)

prop = {
    fistname: 'Doe',
    lastName : 'John',
    age: 56
}
newProp = {
        person: {
            fistname: 'Doe',
            lastName : 'John',
            age: 56
}
}