import {createContext, useContext, useState} from 'react'

const StateContext = createContext(
    {
        currentUser: {
            name: null,
            email: null,
        },
        token: null,
        notification: null,
        setUser: () => {},
        setToken: () => {},
        setNotification: () => {},

    }
)

export const ContextProvider= ({children})=>{
    const [currentUser, setUser] = useState({
        name: 'sufiun',
        email: null,
    })
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [notification, _setNotification] = useState('')

    const setToken = (token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    const setNotification = (message)=>{
        _setNotification(message)
        setTimeout(()=>{
            _setNotification('')
        }, 5000)
    }

    return(
        <StateContext.Provider value={{currentUser, token, notification, setUser, setToken, setNotification}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> { return useContext(StateContext) }