import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../../actions/auth'
import './Auth.css'
import AboutAuth from './AboutAuth'
import icon from '../../assets/icon.png'


const Auth = () => {

  const [isSignUp, setisSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   const dispatch = useDispatch()
   const navigate = useNavigate()

  const handleSwitch = () =>{
    setisSignUp(!isSignUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert('Enter email and password')
    }
    if(isSignUp){
      if(!name){
        alert("Enter a name to continue")
      }
      dispatch(signup({name, email, password}, navigate))
    }else{
      dispatch(login({email, password}, navigate))
    }
    
  }
   
  return (
    <section class='auth-section'>
      { isSignUp && <AboutAuth/>}
      <div class='auth-container-2'>
        { !isSignUp && <img src={icon} alt='stack overflow' className='login-logo' width={40}/>}
        <form onSubmit={handleSubmit}>
          {
            isSignUp && (
              <label htmlFor='name'>
                <h1>Display Name</h1>
                <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
              </label>
            )
          }

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h4>Password</h4>
                  { !isSignUp && <p style={{ color:"#007ac6", fontSize:'13px' }}>forgot Password?</p> }
            </div>
            <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
            { isSignUp && <p style={{color: "#666767", fontSize:"13px"}}>Password must contain atleast eight <br/> character including at least 1 letter and 1<br/> number.</p> }
          </label>
          {
            isSignUp && (
              <label htmlFor='check'>
                <input type="checkbox" id='check' />
                <p style={{fontSize:"13px"}}>Opt-in to receive occassional, <br/> product updates, user research invitations,<br/> compony announcements, and digests.</p>
              </label> 
            )
          }
          <button type='submit' className='auth-btn'>{ isSignUp ? 'Sign up':'Log in' }</button>
          {
            isSignUp && (
              <p style={{color: "#666767", fontSize:"13px"}}>
                By clicking 'Sign up',you are agree to our
                <span style={{ color:"#007ac6"}}> term of <br/> service</span>,
                <span style={{ color:"#007ac6"}}> privacy policy </span> and 
                <span style={{ color:"#007ac6"}}> cookie policy </span>   
              </p>
            )
          }
        </form>
        <p>
          { isSignUp ? 'Already have an account? ' : "Don't have an account"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}> { isSignUp ? 'Log in' : 'Sign up'} </button>
        </p>
      </div>
    </section>
  )
}

export default Auth
