import React from 'react'

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
      <div className='form-controll'>
        <label htmlFor="name">Nome:</label>
<input 
type="text" 
name='name' 
id='name' 
placeholder='Coloque seu nome' required 
value={data.name || ""} 
onChange={(e)=>(updateFieldHandler("name", e.target.value))}/>
      </div>
      <div className='form-controll'>
        <label htmlFor="email">Nome:</label>
<input type="email"
 name='email' 
 id='email' 
 placeholder='Coloque seu E-mail' required
 value={data.email || ""} 
onChange={(e)=>(updateFieldHandler("email", e.target.value))}/>
      </div>
    </div>
  )
}

export default UserForm
