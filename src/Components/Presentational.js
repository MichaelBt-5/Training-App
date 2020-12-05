import React from 'react'
import { CheckPicker, SelectPicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { bodyParts } from '../excerciseList';






function Presentational({data, handleChange}) {
    
     return (
         <form className='select'>
          <select
               className="form-control btn btn-outline-light"
               value={data.difficulty}
               name='difficulty'
               onChange={handleChange}>
               <option value=''>Level of advancement</option>
               <option value='1'>Beginner</option>
               <option value='2'>Intermidate</option>
               <option value='3'>Advanced</option>
          </select>
          <select
               className="form-control btn btn-outline-light"
               value={data.trainingType}
               name='trainingType'
               onChange={handleChange}>
               <option value=''>Training type</option>
               <option value='Strength training'>Strength training</option>
               <option value='Bodybuilding'>Bodybuilding</option>
               <option value='Crossfit training'>Crossfit training</option>
          </select>
          <select
               className="form-control btn btn-outline-light"
               value={data.trainingDays}
               name='trainingDays'
               onChange={handleChange}>
               <option value='1'>Trainings per week</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
               <option value='4'>4</option>
               <option value='5'>5</option>
               <option value='6'>6</option>
          </select>
          <CheckPicker 
               className="form-control btn btn-outline-light"
               appearance='subtle'
               searchable={false}
               value={bodyParts.value}
               data={bodyParts}
               onChange={handleChange}
               size='md'
               style={{'padding': 0, 'boxSizing': 'border-box', 'width': '100%'}}
               />
        </form>
        
     )
     
}


export default Presentational