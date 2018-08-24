// @flow
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component<*> {
  render() {
    return <div>Hello</div>
  }
}

const root = document.getElementById('root')
if (!root) throw new Error('No root element')

ReactDOM.render(<App />, root)
