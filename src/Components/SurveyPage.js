import React from 'react'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'


function SurveyPage({data, handleChange, handleSubmit, togglePassword, revealedIconRef, passwordTwoRef, passwordOneRef  }) {
    return (
        <div className='surveyPage'>
        <h3 style={{'color': 'black'}}>Create your account</h3>
        <input
                type='text'
                title='Your username'
                className='surveyPageElements'
                placeholder='Username'
                value={data.userName}
                name='userName'
                onChange={handleChange}
            />
            <input
                type='text'
                title='Your full name and surname'
                className='surveyPageElements'
                placeholder='Full Name'
                value={data.fullName}
                name='fullName'
                onChange={handleChange}
            />
            <input
                type='email'
                title='Your emial address'
                className='surveyPageElements'
                placeholder='E-mail Address'
                value={data.emailAddress}
                name='emailAddress'
                onChange={handleChange}
            />

        <div style={{'position': 'relative'}}>
            <input
                title='Password should have at least 8 characters, one digit, one special sign and at least one upper and lower case letter.' 
                className='surveyPageElements'
                type={data.isPasswordRevealed ? 'text' : "password"} 
                name='password' 
                placeholder='Enter your password' 
                value={data.password} 
                onChange={handleChange}
                ref={passwordOneRef} 
            />
            <span onClick={togglePassword} ref={revealedIconRef}>
                <span>
                    {data.isPasswordRevealed ?
                    <FontAwesomeIcon icon={faEye} className='customIcon' style={{'color':'black'}} /> :
                    <FontAwesomeIcon icon={faEyeSlash} className='customIcon'/> }
                </span>
            </span>
        </div>
        <div style={{'position': "relative"}}>
            <input 
                title='Confirm your passwword'
                style={{'postion': 'relative', 'top': '0px'}}
                className='surveyPageElements'
                type={data.isPasswordRevealed ? 'text' : "password"} 
                name='confirmPassword' 
                placeholder='Confirm your password' 
                value={data.confirmPassword} 
                onChange={handleChange} 
                ref={passwordTwoRef}
            />
             <span ref={revealedIconRef}>
                <span>
                    {(data.password === data.confirmPassword) && data.password.length !== 0 ?
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className='customIcon' 
                            style={{'color':'green'}}
                        /> : (data.password !== data.confirmPassword) && data.confirmPassword.length !== 0 ?
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            className='customIcon' 
                            style={{'color':'red'}}
                        />
                        :null}
                </span>
            </span>
            </div>
        <form onSubmit={handleSubmit}>
            <input
                title='Sign up' 
                type="submit" 
                className='surveyPageElements btn btn-primary'
                value="SIGN UP"
                style={{'fontSize': '23px', 'fontWeight': 'bold'}} 
            />
        </form>
    </div>        
    )
}

export default SurveyPage