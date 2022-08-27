import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap' 
import EulerFluid from "../../assets/eulerfluid.gif"
import GNATS from "../../assets/gnats.gif"
import Spotify from "../../assets/spotify.gif"
import Burger from "../../assets/burger.gif"

import './projects.css'

const name = ( props ) => {
    return(
 
        <div className='project-container'>

            <h1 className='title'>Projects</h1>

            <Container fluid>
                <Row>
                <Col className='d-flex align-items-stretch' xs={6} sm={6} md={4} lg={3}>
                    <Card className='card-animation my-4 text-white bg-dark border border-info'>
                    <Card.Img variant="top" src={EulerFluid}/>
                    <Card.Body>
                        <a target='_blank' href='https://github.com/Dill800/Euler-Fluid'>
                        <Card.Title className='text-center program-name'>Euler Fluid Simulator</Card.Title>
                        </a>
                        <Card.Text className='program-content'>
                        Fluid simulator based on the Navier-Stokes equation. Learned a lot about fluid mechanics while making this one.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col className='d-flex align-items-stretch' xs={6} sm={6} md={4} lg={3}>
                    <Card className='card-animation my-4 text-white bg-dark border border-info'>
                        <Card.Img variant="top" src={GNATS}/>
                    <Card.Body>
                        <a target='_blank' href='https://github.com/Dill800/GNATS'>
                        <Card.Title className='text-center program-name'>GNATS</Card.Title>
                        </a>
                        <Card.Text className='program-content'>
                        Implemenation of a genetic algorithm. Inspired by CodeBullet's <a target='_blank' href='https://www.youtube.com/watch?v=VnwjxityDLQ'>youtube video</a>.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex align-items-stretch' xs={6} sm={6} md={4} lg={3}>
                <Card className='card-animation my-4 text-white bg-dark border border-info'>
                <Card.Img variant="top" src={Burger}/>
                    <Card.Body>
                        <a target='_blank' href='https://github.com/Dill800/restaurant-selector'>
                        <Card.Title className='text-center program-name'>Restaurant Finder</Card.Title>
                        </a>
                        <Card.Text className='program-content'>
                        Selects a random restaurant near the user with the push of a button.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex align-items-stretch' xs={6} sm={6} md={4} lg={3}>
                    <Card className='card-animation my-4 text-white bg-dark border border-info'>
                        <Card.Img variant="top" src={Spotify}/>
                    <Card.Body>
                        <a target='_blank' href='https://github.com/Dill800/spotify-recommender'>
                        <Card.Title className='text-center program-name'>Song Visualizer</Card.Title>
                        </a>
                        <Card.Text className='program-content'>
                        Visualizes features of a currently-playing song on Spotify. Check it out <a target='_blank' href='https://spotify-music-visualizer.herokuapp.com/'>here</a>.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
                </Row>

      </Container>
        </div>
 
    )
}
export default name;