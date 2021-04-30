import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Card from './Card'

const ResultsContainer = styled.div`
  border:1px solid tomato
  width:tomato
`

export default function Results({ results })
{
  return (
    <ResultsContainer>
      { results.map(result => {
        const { title, description, imageUrl } = result
        return(<Card
          key={title}
          title={title}
          description={description}
          imageUrl={imageUrl}
        />)
      }) }
    </ResultsContainer>
  )
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  )
}
