import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Page extends React.Component {
  render() {
    return (
      <div>
        <h2> Display Pages : </h2>
        <h1> Story Title : Three Little Pigs </h1>
      </div>
    )
  }
}

export default Page
