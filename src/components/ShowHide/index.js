/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: false, lastCard: false}

  firstName = () => {
    const {firstCard} = this.state
    this.setState({firstCard: !firstCard})
  }

  secondName = () => {
    const {lastCard} = this.state
    this.setState({lastCard: !lastCard})
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="card">
          <div>
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="innerCard1">Joe</p> : ''}
          </div>
          <div>
            <button className="button" type="button" onClick={this.secondName}>
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="innerCard2">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
