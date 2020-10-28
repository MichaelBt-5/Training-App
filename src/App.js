import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from './Components/Form'
import StartingPage from './Components/StartingPage'
import Popular from './Components/Popular'
import About from './Components/About'


function App() {
    return (
        <main>
        <Switch>
        <Route path='/' component={StartingPage} exact/>
        <Route path='/trainings' component={Form} />
        <Route path='/popular' component={Popular} />
        <Route path='/about' component={About} />
        </Switch>
        </main>
    )
}

export default App