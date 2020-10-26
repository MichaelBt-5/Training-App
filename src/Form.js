import React from 'react'
import excerciseList, { muscles } from './excerciseList'
import ListExcercises, { DoubleFilter, MapTrainingDays } from './Methods'
import Presentational from './Presentational'
import './index.css'



class Form extends React.Component {
  constructor() {
    super() 
    this.state = {
      difficulty: '',
      trainingType: '',
      trainingDays: 0,
      showBase: false,
      muscleGroup: '',
      isClicked: false,
    }
    this.handleChange = () => {
        const { value, name } = window.event.target
        this.setState({[name]: value}) 
    }
    this.handleClick = () => {
      this.setState(prevState =>  {
        return {
          showBase: !prevState.showBase,
          isClicked: false,
          difficulty: '',
          trainingType: '',
          trainingDays: '',
       }
      })
    }
    this.createByClick = () => {
      this.setState(prevState => {
        return {
          isClicked: !prevState.isClicked
        }
      })
    }
  }
  render() {
    
    return (
      <div className='form'>
      <div className='button'>
      <button onClick={this.createByClick} type='button' className="btn btn-outline-light">{!this.state.isClicked ? 
              'Create training!' : 'Training created!'}</button>
      <br /><br/>
      <button onClick={this.handleClick} type='button' className="btn btn-outline-light">See all available excercises</button>
      </div>
      
      <hr/>
      <Presentational 
          handleChange={this.handleChange}
          data={this.state} 
        />
        <hr />
        {this.state.isClicked && this.state.trainingDays ? 
        <MapTrainingDays data={this.state} /> : this.state.isClicked ? <DoubleFilter data={this.state} /> : null}
        {this.state.showBase ? <ListExcercises items={excerciseList} muscle={muscles} /> :
         null}
      </div>
    )
  }
}

export default Form