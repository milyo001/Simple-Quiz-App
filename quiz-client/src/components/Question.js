import React, { useContext } from 'react'
import { stateContext } from '../hooks/useStateContext';

export default function Question() {

  const {context, setContext} = useContext(stateContext);
  
  return (
    <div>Question</div>
  )
}
