import React from 'react'


function Presentational({data, handleChange}) {
     return (
         <div className='select'>
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
        <option value='Conditioning training'>Conditioning training</option>
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
        
        </div>
     )
}

export default Presentational