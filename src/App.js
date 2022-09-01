import React, {useState, useEffect} from 'react';
import './app.scss'
import axios from 'axios'

import Projects from './components/projects/projects'
import Stats from './components/stats/stats'
import AboutMe from './components/aboutme/aboutme'
import Landing from './components/landing/landing'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Chatbot from './components/chatbot/chatbot'

const App = () => {

  const api = 'https://us-central1-portfolio-backend-360715.cloudfunctions.net/expressApi'
  //const api = 'http://localhost:5000/portfolio-backend-360715/us-central1/expressApi'
  const [heartRate, setHeartRate] = useState(null)
  const [sleep, setSleep] = useState(null)
  const [steps, setSteps] = useState(null)
  const [notWearing, setNotWearing] = useState(null)

  useEffect(() => {

    axios.get(api+'/stats/sleep')
    .then(response => {
      if(response.data.success === false) {
        console.log("False");
        console.log(response);
        setSleep("X");
        return;
      }
      setSleep(response.data.value + " hrs")
    })

    axios.get(api+'/stats/steps')
    .then(response => {
      if(response.data.success === false) {
        setSteps("X");
        return;
      }
      setSteps(response.data.value)
    })

    axios.get(api+'/stats/heartrate')
    .then(response => {
      if(response.data.success === false) {
        setHeartRate("X");
        setNotWearing(true);
        return;
      }
      setHeartRate(response.data.value + " BPM")
      setNotWearing(response.data.notWearing)
    })

  }, [])

  return (
    <div style={{backgroundColor: '#1A1A1A'}}>

      <Landing/>
      <AboutMe/>
      <hr/>
      <Stats notWearing={notWearing} heartRate={heartRate} sleep={sleep} steps={steps}/>
      <hr/>
      <Projects/>
      <hr/>
      <Experience/>
      <hr/>
      {/*<Chatbot/>
      <hr/>*/}
      <Contact/>
    </div>
  );
}

export default App;
