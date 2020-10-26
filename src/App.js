import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from './Form'
import StartingPage from './StartingPage'


function App() {
    return (
        <main>
        <Switch>
        <Route path='/' component={StartingPage} exact/>
        <Route path='/trainings' component={Form} />
        </Switch>
        </main>
    )
}

export default App