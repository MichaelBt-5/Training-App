import React from 'react'
import Tooltip from './Tooltip'
import excerciseList, { excerciseToMuscle, muscles } from './excerciseList'
import './Tooltip.css'



const ListExcercises = ({ items }) => {
    const sorted = items.sort((a, b) => a.muscleGroup.localeCompare(b.muscleGroup))
    const sections = muscles.map((muscle) => {
        let array = []
        sorted.forEach((item) => {

            if (item.muscleGroup === muscle.muscle) {
                array.push(
                    <ul key={item.id}>
                        <div>
                            <Tooltip content={item.info} direction='right' image={item.image}>
                            <h5>{item.name.toUpperCase()}</h5>
                            </Tooltip>
                        </div>
                        <li>Excercise difficulty: {item.advance}</li>
                        <li>Training type: {item.trainingType}</li>
                        <br/>
                        <h5>Working muscles:</h5> <MapMuscles id={item.id}/>
                        <hr />
                    </ul>
                )
            }    
        })
        if(array.length === 0) {
            return null
        }
        return (
            
            <div key={muscle.id}>
                <h2> {muscle.muscle}</h2>
                <div>{array}</div>
            </div>
        )    
    })
    return (
        <div className='trainings'>
            {sections}
        </div>
    )
}

export const MapMuscles = ({ id }) => {
    let ListOfMuscles = []

    excerciseToMuscle.filter(x => x.excerciseId === id ? 
              muscles.filter(({ id, muscle, image, name}) => id === x.muscleId ?
              ListOfMuscles.push(
                  muscle !== 'Back' ?
                    <li key={id}>
                        <Tooltip 
                            name={name} 
                            image={image} 
                            direction='right'>
                            {muscle}
                        </Tooltip>
                  </li> : null) : null) : null)
        
                return ( <div>{ListOfMuscles}</div> )
}


export const DoubleFilter = ({ data }) => {
    const filteredDoubles = excerciseList
        .filter(x => x.difficulty <= data.difficulty && x.trainingType === data.trainingType)
        .filter(item => importanceFiltering(item))
    const filterDifficulty = excerciseList.filter(x => x.difficulty <= data.difficulty)
        .filter(item => importanceFiltering(item))
    const filterTypes = excerciseList.filter(x => x.trainingType === data.trainingType)
        .filter(item => importanceFiltering(item))

 //   const countDoubles = filteredDoubles.filter(item => item.category === "Main").length
 //   console.log(countDoubles)
 //  const finalCountDoubles = () => countDoubles.length > 2 ? countDoubles.splice(1, countDoubles.length) : countDoubles
 //   console.log(finalCountDoubles)
    if (data.difficulty && data.trainingType) {
        return (
            <div>
           {!data.trainingDays ? <h3 className='day'>Training for today</h3> : null}
            <ListExcercises
                items={filteredDoubles}
            />
            </div>
                )
    } else if (data.difficulty) {
        return (
            <div>
            {!data.trainingDays ? <h3 className='day'>Training for today</h3> : null}
            <ListExcercises
                items={filterDifficulty}
            />
            </div>
                )
    } else if (data.trainingType) {
        return (
            <div>
           {!data.trainingDays ? <h3 className='day'>Training for today</h3> : null}
            <ListExcercises
                items={filterTypes}
            />
            </div>
                )
    } else {
        return null
    }
}

function importanceFiltering(item) {
    let result = Math.floor(item.importance * Math.random())
    if (result >= (item.importance * 0.5)) {
       return true
    } else {
        return false
    }
} 

export const MapTrainingDays = ({data}) => {
    let array = []
    let counter = data.trainingDays
    let n = 1
    while(counter >= 1) {
        array.push(
            <div key={n}>
                <h3 className='day'>Day {n}</h3>
                <DoubleFilter data={data} />
            </div>
        )
            counter--
            n++
            }
            return array
    
}

export default ListExcercises