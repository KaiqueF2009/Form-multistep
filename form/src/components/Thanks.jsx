import React from 'react'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsEmojiAngryFill} from 'react-icons/bs'
import './Thanks.css'
const Thanks = () => {
  return (
    <div className='thanks-container'>
      <h2>Falta só um pouco...</h2>
      <p>Sua opinião é importante para nós, em breve receberá um cupom de 10% de desconto para a próxima compra.</p>
      <p>Para concluir a avaliação, clique no botão de envio</p>
      <h3>Essa é sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  )
}

export default Thanks
