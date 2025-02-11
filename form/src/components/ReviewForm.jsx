import React from 'react'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsEmojiAngryFill} from 'react-icons/bs'
import './ReviewForm.css'


const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className="form-controll score-container">
        <label  className="radio-container">
          <input type="radio" value="Unsatisfied" name="review" required />
          <BsEmojiAngryFill/>
          <p>Insatisfeito</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsEmojiNeutralFill/>
          <p>Mais ou menos</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
         <BsFillEmojiSmileFill/>
          <p>Legal</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
         <BsFillEmojiHeartEyesFill/>
          <p>Maravilhoso</p>
        </label>
      </div>
      <div className="from-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='Conte sobre sua experiência com o produto'></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
