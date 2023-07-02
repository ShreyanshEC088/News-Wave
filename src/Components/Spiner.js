import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
          <img style={{height:"20px",width:"20px"}} src={loading} alt="Spiner"/>
      </div>
    )
  }
}
