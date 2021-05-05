import React from 'react'

export default function Card({ title, imageUrl, description }) {
  return (
    <span className='card'>
      <img
        className='poster card'
        alt={`Movie poster for ${title}`}
        src={imageUrl}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </span>
  )
}
