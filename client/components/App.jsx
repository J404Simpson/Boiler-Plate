import React from 'react'
import NameInput from './NameInput'
import ErrorMessage from './ErrorMessage'

import {getNames} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      names: [],
      name: null,
      detailsVisible: false,
      somethingVisible: false
    }

    this.refreshList = this.refreshList.bind(this)
    this.renderNames = this.renderNames.bind(this)
    this.refreshList = this.refreshList.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.showSomething = this.showSomething.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  renderNames (err, names) {
    this.setState({
      error: err,
      names: names || [],
      name: ''
    })
  }

  refreshList (err) {
    this.setState({
      error: err
    })
    getNames(this.renderNames)
  }

  showDetails () {
    this.setState({
      detailsVisible: true
    })
  }

  showSomething () {
    this.setState({
      somethingVisible: true
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>What is this?</h1>

        <NameInput
          showDetails={this.showDetails}
          name={this.state.name} />

        <p>
          <a id='showSomethingLink' href='#'
            onClick={this.showSomething}>Show something...?</a>
        </p>

        {this.state.detailsVisible && <Something
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget}
          deleteDetails={this.deleteDetails}
          updateForm={this.updateForm} />}
          {/* componentfunction={this.functionInThisFile} */}
      </div>
    )
  }
}
