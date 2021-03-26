import React, {useState} from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  margin-top:50px;
  align-self:center;
`
const Input = styled.input`
  padding: 13px 20px;
  font-family: 'Open Sans', sans-serif;
  border: 1px solid #CCCCCC;
  margin-right:10px;
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

export default function Search()
{
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
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
