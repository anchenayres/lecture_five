import axios from 'axios';
import React, { useState } from 'react'
import MiniModalLeft from './components/MiniModalLeft';
import MiniModalRight from './components/MiniModalRight';
import { useNavigate } from 'react-router-dom';
import Okay from '../src/assets/okay.svg';
import NotOkay from '../src/assets/notOkay.svg';

const Register = () => {

  return (
    <div>
        <form>
            <h1>Sign Up to FakeBook</h1>
            <p>Give us all that sweet sweet data!</p>
            <div className='names'>
                <input name="first" className='left' type="text" placeholder='First Name' />
                <input name='last' type="text" placeholder='Last Name'/>
            </div>      
            <div className='statusIcon'>
                <img src=""/>
            </div>
            <input name="email" type="email" placeholder='Your Email'/>
            <div className='userCon'>
                <div className='statusIconUser'>
                    <img src=""/>
                </div>
                <input name="username" className='left' type="username" placeholder='Select A Username' />
                <input name="contact" type="contact" placeholder='Contact Number' />
            </div>
            <div className='passCon'>
                <input name="password" type="password" placeholder='Choose A Password' />
                <input name="conPass" type="password" placeholder='Confirm Password'/>
            </div>
            <button type="submit">Take My Data Lizard Man!</button>
        </form>
            
    </div>
  )
}

export default Register
