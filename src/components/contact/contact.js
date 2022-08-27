import React, {Fragment} from 'react'
import './contact.css' 
import LinkedIn from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import Mail from '../../assets/mail.png'

const name = ( props ) => {
    return(
        <Fragment>
            <h1>Contact Me!</h1>
            <div className='contact-container'>
                <a target='_blank' href='https://www.linkedin.com/in/dillon-mcgovern/'><img className='contact-element' src={LinkedIn}/></a>
                <a target='_blank' href='https://github.com/Dill800'><img className='contact-element' src={Github}/></a>
                <a target='_blank' href='mailto:dillonm800@gmail.com'><img className='contact-element' src={Mail}/></a>
            </div>
            <br/>
        </Fragment>
    )
}
export default name;