import React, { useState } from 'react'

const Hooks = () => {
    const [name,setName] = useState("")

  return (
    <div>
        <h2>{name}</h2>
        <input value={name} onChange={(e)=>setName(e?.target?.value)}/>
    </div>
  )
}

export default Hooks