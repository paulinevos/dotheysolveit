import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResultsContainer = styled.div`
  border:1px solid tomato
  width:tomato
`

export default function Results({ match, suggestions })
{
    console.debug(match)
  return (
    <ResultsContainer>
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
