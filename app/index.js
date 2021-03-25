import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Search from './components/Search'

class App extends React.Component {
  render() {
    return(
      <>
        <h1>Do They Solve It?</h1>
        <p>If you like true crime, but you don't like wasting your life watching cases they never solve,
          find out here if they solve it at the end.</p>
        <Search />
      </>
    )
  }
}

ReactDOM.render(
<App />,
  document.getElementById('app')
)
