import React from 'react'

const UserForm = () => {
  return (
    <div>
      <div className='form-controll'>
        <label htmlFor="name">Nome:</label>
<input type="text" name='name' id='name' placeholder='Coloque seu nome' required/>
      </div>
      <div className='form-controll'>
        <label htmlFor="email">Nome:</label>
<input type="email" name='email' id='email' placeholder='Coloque seu E-mail' required/>
      </div>
    </div>
  )
}

export default UserForm
