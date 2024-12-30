import './App.css'
import PersonComponent from './components/PersonComponent'

function App() {
// let firstPlayerName = people[0].firstName
  const people = [
    {
      firstName : "Doe",
      lastName : "Jane",
      age : 45,
      hairColor : "Black"
    },
    {
      firstName : "Smith",
      lastName : "Jone",
      age : 88,
      hairColor : "Brown"
    }
  ]
let x = [1,2,3,4,5,6,7,8]
  
  return (
    <>
    {/* {
      x.map( ( num, index)=>(
        <p key={index}> The number is {num}</p>
      ) )
    }
    { [<p>This is the p tage</p>, <p>Another ptag</p>] } */}
      {/* { 
        people.map( (element, index) => (
          <PersonComponent firstName = {element.firstName} lastName = {element.lastName} age = {element.age} hairColor = {element.hairColor} />

        ))
      } */}
      {/* { 
        people.map( ({firstName, lastName, age, hairColor}, index) => (
          <PersonComponent key={index} firstName = {firstName} lastName = {lastName} age = {age} hairColor = {hairColor} />
        ))
      } */}
      {
        people.map( (person, index) => (
          <PersonComponent key={index} person={person} />
        ))
      }
    </>
  )
}

export default App
