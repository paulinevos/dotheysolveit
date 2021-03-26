import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Search from './components/Search'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
  width:900px;
`

class App extends React.Component {
  render() {
    return(
      <Container>
        <h1>Do They Solve It?</h1>
        <p>If you like true crime, but you don't like wasting your life watching cases they never solve,
          find out here if they solve it at the end.</p>
        <Search />
      </Container>
    )
  }
}

ReactDOM.render(
<App />,
  document.getElementById('app')
)
