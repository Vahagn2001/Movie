import React from 'react'

const SearchCart = ({item}) => {
  return (
    <div>
        <img src={`https://media.themoviedb.org/t/p/w188_and_h282_bestv2/${item.poster_path}`} alt={item.original_title} />
    </div>
  )
}

export default SearchCart