import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact me!</h3>
      <form >
        <fieldset className='contactFieldset'>
          <legend>Name</legend>
          <input className='contactInput'/>
        </fieldset>
        <fieldset className='contactFieldset'>
          <legend>Email</legend>
          <input className='contactInput'/>
        </fieldset >
        <fieldset className='contactFieldset'>
          <legend>Mobile No</legend>
          <input className='contactInput'/>
        </fieldset >
        <fieldset className='contactFieldset'>
          <legend>Subject</legend>
          <input className='contactInput'/>
        </fieldset>
        <fieldset className='contactFieldset'>
          <legend>Message</legend>
          <textarea className='contactInput' rows="5"/>
        </fieldset>
        
        <button className='btn'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
