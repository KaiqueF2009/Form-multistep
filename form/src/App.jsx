import { useState, useEffect } from 'react'
import{ FiSend } from 'react-icons/fi'
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
const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

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
<form onSubmit={(e) => changeStep(currentStep + 1, e)}>
  <div className="input-container">{currentComponent}</div>
  <div className="actions">
    <button type="button" onClick={()=> changeStep(currentStep - 1)}>
      <GrFormPrevious/>
      <span>Voltar</span>
    </button>
    <button type="submit">
      <span>Avançar</span>
      <GrFormNext/>
      </button>
      {!isFirstStep &&(<button type="button">
      <span>Voltar</span>
      <GrFormNPrevious/>
      </button>)}
      {!isLastStep?(
        <button type="submit">
        <span>Avançar</span>
        <GrFormNext/>
        </button>
      ):(
        <button type="button">
      <span>Enviar</span>
      <FiSend/>
      </button>
      )}
  </div>
</form>
</div>
 </div>
)
}

export default App
