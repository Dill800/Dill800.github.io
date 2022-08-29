import React, {Fragment} from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import './stats.css'

import Heart from '../../assets/heart.png'
import Steps from '../../assets/steps.png'
import Sleep from '../../assets/sleep.png'

import StatsBox from './statsBox'

const name = ( props ) => {

    return(
        <Fragment>
        <h1>Biostats</h1>
        <p className='stats-description'><i>Retrieves current daily metrics about me from my watch!</i></p>
        <div className='stats-container'>
            <StatsBox image={Sleep} value={props.sleep}/>
            <StatsBox image={Steps} value={props.steps}/>
            <StatsBox image={Heart} value={props.heartRate}/>
        </div>
        {props.sleep === 'X' && <p className='stats-description'><i>Data unavailable - try again soon</i></p>}
        {props.notWearing && <p className='stats-description'><i>* I'm currently not wearing my watch *</i></p>}
        </Fragment>
    )
}
export default name;