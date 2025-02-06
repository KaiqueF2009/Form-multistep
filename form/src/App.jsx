import { useState, useEffect } from 'react'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// hooks

import useForm from './hooks/useForm'

import './App.css'

function App() {
  
const formComponents =[
  <UserForm/>,
  <ReviewForm/>,
  <Thanks/>
];
const {currentStep, currentComponent} = useForm(formComponents);

return(
  <div className='App'>
<div className='header'>
  <h2>Deixe sua avaliação!</h2>
  <p>
    Ficamos felizes com sua compra, utilize este formulário para avaliar
  </p>
</div>
<div className='form-container'>
<p>etapas</p>
<form>
  <div className="input-container">{currentComponent}</div>
  <div className="actions">
    <button type="button">
      <GrFormPrevious/>
      <span>Voltar</span>
    </button>
    <button type="submit">
      <span>Avançar</span>
      <GrFormNext/>
      </button>
  </div>
</form>
</div>
 </div>
)
}

export default App
