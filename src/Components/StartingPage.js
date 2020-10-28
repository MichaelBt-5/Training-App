import React from 'react'
import Navbar from './Navbar'

const StartingPage = () => {
    return (
        <div className='start-block'>
            <Navbar/>
            <div className='startingpage'>
                <h1>Welcome to [App Name]</h1>
                <p>A place where you can create your tailor-made training plan</p>
            </div>
        </div>
    )
}

    

export default StartingPage