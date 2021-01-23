import React, { Component } from 'react'

class CreateContent extends Component {
  render () {
    return (
      <article>
        <h2>Create a note</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault()
            this.props.onSubmit(e.target.title.value, e.target.detail.value)
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="Insert title here"></input></p>
          <p><textarea name="detail" placeholder="Insert detail here"></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    )
  }
}

export default CreateContent
