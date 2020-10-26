import React from 'react'
import Navbar from './Navbar'

class StartingPage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                Hello app
            </div>
        )
    }
}
export default StartingPage