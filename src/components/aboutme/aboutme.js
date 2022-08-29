import React, {Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Me from '../../assets/croppedMe.png'

import './aboutme.css'

const name = ( props ) => {
    return(
        <Fragment>

            <h1 className='title'>About Me</h1>

            <Container fluid>

                <Row>
                    <Col className = 'd-flex justify-content-center' xs={12} md={5}>
                        <img className='me' src={Me}/>
                    </Col>

                    <Col className = 'd-flex justify-content-left' xs={12} md={7}>
                        <div className='bio-container'>
                            <p>Hello! I'm a University of Florida graduate with a bachelor's degree in <strong>Computer Science </strong>
                              and minors in <strong>Mathematics</strong> and <strong>Physics</strong>. 
                             My passion for physics is just as strong as my passion for computer science - I love 
                             <strong> learning about the natural world and solving problems</strong>.</p>
                             <br/>
                             <p>I am currently working as a <strong>Forward Deployed Software Engineer</strong> at Palantir.</p>
                             <br/>
                             <p>If you have any questions, feel free to ask! You can send me an email or use my chatbot down below.</p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </Fragment>
    )
}
export default name;