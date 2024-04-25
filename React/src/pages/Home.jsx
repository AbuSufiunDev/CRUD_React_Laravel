import React from 'react'
import { useStateContext } from '../context/ContextProvider'
function Home() {
    const {currentUser} = useStateContext()
    return (
        <h1>this is home { currentUser.name}</h1>
    )
}

export default Home
