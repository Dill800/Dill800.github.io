import React, {useState, Fragment} from 'react'
import {Spinner, InputGroup, Form, Button, FormControl} from 'react-bootstrap'
import axios from 'axios'

import './chatbot.css'

const Chatbot = ( props ) => {

    const [sentence, setSentence] = useState('')
    const [output, setOutput] = useState('Got any questions about me/this website? Ask my chatbot!');
    const [loading, setLoading] = useState(false)
    

    function submit(event) {
        
        event.preventDefault()
        setLoading(true);
        axios.get(`/chatbot?value=${sentence}`)
        .then(response => {
            setLoading(false);
            setOutput(response.data)
        })

    }
    
    function onSentenceChange(event) {
        event.preventDefault()
        setSentence(event.target.value)
    }

    return(
        <Fragment>

            <h1 className='title'>Chatbot</h1>

            <div className='output-container'>  
                
            {loading ? <Spinner className='output' animation="grow" variant="light"/> : <p className='output'>{output}</p>}

            <Form onSubmit={submit} className='chatbot-form'>
                <InputGroup className="mb-3">
                    <FormControl required onChange={onSentenceChange}/>
                    <InputGroup.Append>
                        <Button type="submit" variant='outline-light'>Ask</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            </div>
            
        </Fragment>
    )
}
export default Chatbot;