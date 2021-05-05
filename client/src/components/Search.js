import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { doTheySolveIt } from '../utils/api'
import { TooManyResultsError } from '../errors/TooManyResultsError'

const Form = styled.form`
  display: flex;
  margin:30px 0;
  align-self:center;
`
const Input = styled.input`
  padding: 13px 20px;
  font-family: 'Open Sans', sans-serif;
  border: 1px solid #CCCCCC;
  margin-right:10px;
  width:250px;
`

const Button = styled.button`
  padding: 13px 30px;
  font-family: 'Open Sans', sans-serif;
  font-size:0.8em;
  background-color:#a3222a;
  color: #FFFFFF;
  border: none;
  :active {
    background-color:#991509;
  }
  :disabled {
    opacity:0.6;
  }
`

export default function Search({ setErrorMessage, setMatch, setSuggestions })
{
  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => console.log(data))
  })

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')
    setValue('')

    doTheySolveIt(value)
      .then(
        resultSet => {
          const { match, suggestions } = resultSet
          setMatch(match)
          setSuggestions(suggestions)
        },
        error => {
          setErrorMessage(getErrorMessage(error))
        }
      )
  }

  const getErrorMessage = error => {
    if (error instanceof TooManyResultsError) {
      return 'Ahh! Too many results. Try a more specific search.'
    }

    return 'Something went wrong! Please try again later.'
  }

  return(
    <Form
      name='title-search'
      id='search'
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        id='title'
        placeholder='Find a title'
        value={value}
        onChange={e=>setValue(e.target.value)}
      />
      <Button
        className='btn'
        type='submit'
        disabled={!value}
      >
        TELL ME.
      </Button>
    </Form>
  )
}

Search.propTypes = {
  setErrorMessage: PropTypes.func.isRequired,
  setMatch: PropTypes.func.isRequired,
  setSuggestions: PropTypes.func.isRequired
}
