import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import Master from '../assets/master-hog.png'
import BabyHog from '../components/BabyHog'

class MasterHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eyeColor: "blue",
      name: "Master Blaster",
      weight: '2.54 Tons',
      offspring: []
    }
  }


  changeEyeColor(event) {
    this.setState({eyeColor: event.target.value})
  }


  render() {
    console.log(this.state)
    return (
      <div>

        <form>
          <input
            type="radio"
            name="eyeColor"
            value="blue"
            onClick={this.changeEyeColor.bind(this)}>
          </input> Blue<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="sun"
            onClick={this.changeEyeColor.bind(this)}>
          </input> Sun<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="glowing"
            onClick={this.changeEyeColor.bind(this)}>
          </input> Glowing<br></br>
        </form>


        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 400}}></img>
        </div>
        <ul className="hoglist">
          {this.props.offspring.map(offspring => <BabyHog {...offspring} eyeColor={this.state.eyeColor} />)}
        </ul>

      </div>

    )
  }

}

export default MasterHog;
