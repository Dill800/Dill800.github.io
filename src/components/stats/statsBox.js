import React, {Fragment} from 'react'
import {Spinner} from 'react-bootstrap'
import './statsBox.css' 

const name = ( props ) => {
    return(
        <Fragment>
            <div className='stats-box-container'>
                <img src={props.image}/>
    {props.value === null ? <Spinner animation="border" variant="light"/> : <span>{props.value}</span>}
            </div>
        </Fragment>
    )
}
export default name;