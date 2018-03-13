import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eyeColor: this.props.eyeColor,
      name: this.props.attr.name,
      weight: this.props.attr.weight,
      imgHeight: 100
    }
  }

  selectImg() {
    for (let k in imgMapper){
      if (k === this.props.eyeColor) {
        return imgMapper[k]
      }
    }
  }

  changeWeight(event) {
    event.preventDefault()
    if (event.target.id === 'increase') {
      this.setState({imgHeight: this.state.imgHeight + 1})
    } else {
      this.setState({imgHeight: this.state.imgHeight - 1})
    }
  }

  render() {
    return (
        <li className="hogbabies">
          <h1>{this.props.attr.name}</h1>
          <h3>Weight: {this.props.attr.weight}</h3>
          <h4>Eye Color: {this.props.eyeColor}</h4>
          <div className="wrap-crap">
            <Button animated id="increase" onClick={this.changeWeight.bind(this)}>
              <Button.Content id="increase" visible>Increase Weight</Button.Content>
              <Button.Content id="increase" hidden>
                <Icon id="increase" name='plus' />
              </Button.Content>
            </Button>

            <Button animated onClick={this.changeWeight.bind(this)}>
              <Button.Content visible>Decrease Weight</Button.Content>
              <Button.Content hidden>
                <Icon name='minus' />
              </Button.Content>
            </Button>
          </div>


          <img src={`${this.selectImg.apply(this)}`} style={{height: `${this.state.imgHeight}px`}} alt="MasterBlasterJrJr" />


        </li>
    )
  }
}

export default BabyHog;
