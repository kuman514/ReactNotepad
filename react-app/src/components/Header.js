import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div>
        <a
          href='/welcome/'
          onClick={function (e) {
            e.preventDefault()
            //console.log(e)
            this.props.onChangePage()
          }.bind(this)}
        >
          <h1>
            {this.props.appName}
          </h1>
        </a>
      </div>
    )
  }
}

export default Header
