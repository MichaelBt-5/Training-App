import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from './Components/Form'
import StartingPage from './Components/StartingPage'
import Popular from './Components/Popular'
import About from './Components/About'
import Home from './Components/Home'
import 'rsuite/lib/styles/index.less';


function App() {
    return (
        <main>
        <Switch>
        <Route path='/' component={StartingPage} exact/>
        <Route path='/trainings' component={Form} />
        <Route path='/popular' component={Popular} />
        <Route path='/about' component={About} />
        <Route path='/start' component={Home} />
        </Switch>
        </main>
    )
}

export default App