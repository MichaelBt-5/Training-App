import React from 'react'
import Navbar from './Navbar'
import '../index.css'
import SurveyPage from './SurveyPage';



class StartingPage extends React.Component {
    constructor() {
        super()

        this.passwordOneRef = React.createRef();
        this.passwordTwoRef = React.createRef();
        this.revealedIconRef = React.createRef(); 

        this.state = {
            fullName: '',
            password: '',
            confirmPassword: '',
            isPasswordRevealed: false,
            emailAddress: '',
            userName: '',
        }
        
        this.handleChange = () => {
            const { value, name } = window.event.target
            this.setState({[name]: value})  
        }
        
        this.handleSubmit = (event) => {
            event.preventDefault()
            const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            const isOk = re.test(this.state.password)

            if(isOk && this.state.password === this.state.confirmPassword) {
                this.setState({
                    password: '',
                    confirmPassword: ''
                })
                    return alert('A password was submitted.');
                
            } else if (isOk && this.state.password !== this.state.confirmPassword) {
                this.setState({
                    confirmPassword: ''
                })
                    return alert('Passwords not matching!')
            } else {
                this.setState({
                    password: '',
                    confirmPassword: ''
                })
                    return alert('Too weak password!');
            }
            
        }

        this.togglePassword = () => {
            this.setState({
                isPasswordRevealed: !this.state.isPasswordRevealed
            })
        }
    }

    render() {
    return (
    <div className='start-block'>
            <Navbar/>
        <div className='startingpage'>
                <h1>Welcome to [App Name]</h1>
                <p>A place where you can create your tailor-made training plan</p>
        </div>
        <div>
            <SurveyPage
                data={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                togglePassword={this.togglePassword}
                passwordOneRef={this.passwordOneRef}
                passwordTwoRef={this.passwordTwoRef}
                revealedIconRef={this.revealedIconRef}
            />
        </div>
    </div>
        )
    }
}

    
export default StartingPage