import React, {Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './experience.css'

import HomeDepot from '../../assets/thedepot.png'
import UF from '../../assets/uf.png'
import HomeDepot2 from '../../assets/thedepot2.png'
import BAM from '../../assets/bam.jpg'

const name = ( props ) => {
    return(
        <Fragment>

            <h1>Experience</h1>

            <Container className='experience-container' fluid>
            <Row className='experience-row'>
                <Col className = 'd-flex justify-content-center' xs={12} lg={3}>
                    <img className='experience-img' src={BAM}/>
                </Col>

                <Col xs={12} lg={9}>
                    <div >

                        <div className='experience-header'>
                            <span className='experience-title'>Software Engineer Intern</span>
                            <span className='experience-subtitle'>Balyasny Asset Management | June 2021 - Aug 2021</span>
                        </div>
                        
                        <div className='experience-desc'>
                            <p>I worked on the Macro Risk team's Intraday Macro Risk and Scenario dashboard to increase personal view capabilities.</p>
                            <p>Previously, Portfolio and Risk managers were given default groups to view important fiscal metrics about the hedgefund. I provided a way for them to create, save, and share their own view groups instead of relying on the default groups.</p>
                            <p>I also added a feature that allowed users to persist dimension filters across multiple views, increasing the efficiency of using the dashboard.</p>
                            <p>ASP.NET was utilized for backend development and React/Redux was used for the frontend.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='space-between'/>
            <Row className='experience-row'>
                    <Col className = 'd-flex justify-content-center' xs={12} lg={3}>
                        <img className='experience-img' src={HomeDepot2}/>
                    </Col>

                    <Col xs={12} lg={9}>
                        <div >

                            <div className='experience-header'>
                                <span className='experience-title'>Software Engineer Intern</span>
                                <span className='experience-subtitle'>The Home Depot | June 2020 - Aug 2020</span>
                            </div>
                            
                            <div className='experience-desc'>
                                <p>I worked on the Marketing Technology Core team to develop an efficient web application for updating store data in Google/Facebook/Yelp in response to COVID-19.</p>
                                <p>The previous application for updating store data was inefficient and involved downloading/uploading Excel spreadsheets. I developed a UI in React that makes this process much more user-friendly. I also developed a backend in Go using GCP Pub/Sub to provide the inputted data to the external sites.</p>
                                <p>In total, this application saves THD roughly $550 thousand dollars in annual fees by removing the dependency on Yext to update the store data.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='space-between'/>
                <Row className='experience-row'>
                    <Col className = 'd-flex justify-content-center' xs={12} lg={3}>
                        <img className='experience-img' src={HomeDepot}/>
                    </Col>

                    <Col xs={12} lg={9}>
                        <div >

                            <div className='experience-header'>
                                <span className='experience-title'>Software Engineer Intern</span>
                                <span className='experience-subtitle'>The Home Depot | May 2019 - Aug 2019</span>
                            </div>
                            
                            <div className='experience-desc'>
                                <p>I worked on the Online Reporting and Cloud Analytics team to optimize and improve the gross demand metrics dashboard.</p>
                                <p>Integrated Natural Language Processing and Generation capabilities into the dashboard to reduce data ambiguity. Restructured the backend, reducing the query time from 20 minutes to 2 minutes. This increased the dashboard refresh rate by 75%.</p>
                                <p>Incorporated minute-level data visulazation capabilities. Business analysts can now track store performance within the hour.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='space-between'/>
                
                

            </Container>
            
        </Fragment>
    )
}
export default name;