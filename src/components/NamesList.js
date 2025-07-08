import React from 'react'; 

import Person from './Person'


const persons = [
    {
        id: 1,
        name: 'Shiva',
        age: '26',
        skill: 'Ruby'
    },
    {
        id: 2,
        name: 'Chandra',
        age: '30',
        skill: 'React'
    },
    {
        id: 1,
        name: 'Uday',
        age: '27',
        skill: 'Angular'
    }
]


function NamesList() {
    const renderPerson = persons.map(person => <Person person={person}/>)
    return <div> {renderPerson} </div>
}


export default NamesList

