import React, { createContext, useState, useContext, useEffect } from 'react'

export const stateContext = createContext();

// Keeping the information in local browser storage to prevent loss of data when page 
// is reloaded
const getFreshContext = () => {
    try {
        if (localStorage.getItem('context') === null)
            localStorage.setItem('context', JSON.stringify({
                participantId: 0,
                timeTaken: 0,
                selectedOptions: []
            }))
        return JSON.parse(localStorage.getItem('context'));
    } catch (err) {
        console.log('Error: ', err.message);
    }
}

export default function useStateContext() {
    const { context, setContext } = useContext(stateContext);
    return {
        context,
        setContext: obj => { 
            setContext({ ...context, ...obj }) }
    };
}

export function ContextProvider({ children }) {
    const [context, setContext] = useState(getFreshContext);

    // This function will be invoked whenever there is change in the second
    // parameter or the actual context
    useEffect(() => {
        localStorage.setItem('context', JSON.stringify(context))
    }, [context])

    return (
        <stateContext.Provider value={{ context, setContext }}>
            {children}
        </stateContext.Provider>
    )
}
