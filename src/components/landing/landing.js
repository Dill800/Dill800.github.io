import React, {Fragment} from 'react'
import Bounce from 'react-reveal/Bounce'
import './landing.css'


const name = ( props ) => {

    let title = 'Forward Deployed Engineer'

    return(
        <Fragment>
            <Bounce top cascade>
            <div className='landing-page-web'>
                <h1 className = 'name'>Hi, i'm Dillon McGovern.</h1>
                <h2 className='subtitle'>[ <i>{title}</i> ]</h2>
            </div>
            <div className='landing-page-mobile'>
                <h1 className = 'name-mobile'>Dillon McGovern</h1>
                <h2 className = 'subtitle-mobile'>[ <i>{title}</i> ]</h2>
            </div>
            </Bounce>
        </Fragment>
    )
}
export default name;