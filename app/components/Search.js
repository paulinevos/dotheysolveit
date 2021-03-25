import React, {useState} from 'react'

export default function Search()
{
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }

  return(
    <form
      name='title-search'
      id='search'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        id='title'
        placeholder='Find a title'
        value={value}
        onChange={e=>setValue(e.target.value)}
      />
      <button
        className='btn'
        type='submit'
      >
        Do they solve it?
      </button>
    </form>
  )
}
