import React, { Component } from 'react'

class UpdateContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      detail: this.props.data.detail
    }
  }
  render () {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault()
            this.props.onSubmit(this.state.id, this.state.title, this.state.detail)
          }.bind(this)}
        >
          <input type="hidden" value={this.state.id}></input>
          <p><input
            type="text"
            name="title"
            placeholder="Insert title here"
            value={this.state.title}
            onChange={function (e) {
              this.setState({
                title: e.target.value
              })
            }.bind(this)}
          >
          </input></p>
          <p><textarea
            name="detail"
            placeholder="Insert detail here"
            value={this.state.detail}
            onChange={function (e) {
              this.setState({
                detail: e.target.value
              })
            }.bind(this)}
          >
          </textarea></p>
          <p><input
            type="submit"
          >
          </input></p>
        </form>
      </article>
    )
  }
}

export default UpdateContent
