import React from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchParam, setSearchParam] = useSearchParams()
  return (
    <div>
        <h1>User</h1>
        <p>id : {searchParam.get('id')}</p>
    </div>
  )
}

export default User