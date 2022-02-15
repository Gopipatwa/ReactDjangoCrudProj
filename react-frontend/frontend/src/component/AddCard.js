import React, { Component } from 'react'

export default class AddCard extends Component {
  state = {
    title: '',
    completed: '',
  }
  getVal = () => {
    if (this.state.title === '' || this.state.completed === '') {
      alert('fill everything')
      return
    }
    console.log(this.state.title, this.state.completed)
    this.props.setInputHandler(this.state.title, this.state.completed)
    this.setState({ title: '', completed: '' })
  }
  render() {
    return (
      <React.Fragment>
        
        <div className="d-flex flex-column">
          <div className="input-group mt-3 w-75">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="Title"
              value={this.state.title}
              aria-describedby="basic-addon1"
              onChange={(e) => {
                this.setState({ title: e.target.value })
              }}
            />
          </div>

          <div className="dropdown mt-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Item Status
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => {
                this.setState({"completed": true })
              }}>
                  Yes
                </a>
              </li>
              <li value=''>
                <a className="dropdown-item" href="#" onClick={(e) => {
                this.setState({"completed": false})
              }}>
                  No
                </a>
              </li>
            </ul>
          </div>

          
          <button className="btn btn-primary w-25 mt-3" onClick={this.getVal}>
            Submit
          </button>
        </div>
      </React.Fragment>
    )
  }
}
