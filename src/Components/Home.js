import React from 'react'
import app from './../Base'


const Home = () => {
    return (
        <div>
        <div>Home page</div>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
        
        </div>
    )
}
export default Home