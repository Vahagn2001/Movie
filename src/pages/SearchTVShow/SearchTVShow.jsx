import React, { useEffect } from 'react'
import { SearchLayout } from '../../components/SearchLayout/SearchLayout'
import { useSelector } from 'react-redux'
import { getTVShow } from '../../store/slices/searchMovieSlice'
import { SearchCart } from '../../components/SearchCart/SearchCart'
import SearchList from '../../components/SearchList/SearchList'

const SearchTVShow = () => {
    const list=useSelector(getTVShow)
  
  return (
    <SearchLayout>
            <SearchList list={list} />
    </SearchLayout>
  )
}

export default SearchTVShow