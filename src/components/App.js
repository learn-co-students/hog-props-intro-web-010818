import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <MasterHog offspring={offspring["offspring"]}/>

      </div>
    )
  }

}

export default App
