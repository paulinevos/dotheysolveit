import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Search from './components/Search'
import styled from 'styled-components'
import Results from './components/Results'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
  width:900px;
`

class App extends React.Component {
  state = {
    error: '',
    match: false,
    suggestions: []
  }

  setErrorMessage = message => {
    this.setState({ error: message })
  }
  setMatch = results => {
    this.setState({ match: results })
  }
  setSuggestions = results => {
    this.setState({ suggestions: results })
  }

  render() {
    const { error, results } = this.state
    return(
      <Container>
        <h1>Do They Solve It?</h1>
        <p>If you like true crime, but you don't like wasting your life watching cases they never solve,
          find out here if they solve it at the end.</p>
        <Search
          setErrorMessage={this.setErrorMessage}
          setMatch={this.setMatch}
          setSuggestions={this.setSuggestions}
        />
        { error && error }
        { results &&
          <Results
            results={results}
          />
        }
      </Container>
    )
  }
}

ReactDOM.render(
<App />,
  document.getElementById('app')
)
