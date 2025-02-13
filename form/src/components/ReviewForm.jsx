import React from 'react'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsEmojiAngryFill} from 'react-icons/bs'
import './ReviewForm.css'


const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-controll score-container">
        <label  className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required
          checked={data.review === "unsatisfied"} 
          onChange={(e)=>(updateFieldHandler("review", e.target.value))} />
          <BsEmojiAngryFill/>
          <p>Insatisfeito</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="neutral" name="review" required
          checked={data.review === "neutral"} 
          onChange={(e)=>(updateFieldHandler("review", e.target.value))} />
          <BsEmojiNeutralFill/>
          <p>Mais ou menos</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="satisfied" name="review" required
          checked={data.review === "satisfied"} 
          onChange={(e)=>(updateFieldHandler("review", e.target.value))} />
         <BsFillEmojiSmileFill/>
          <p>Legal</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required
          checked={data.review === "very_satisfied"} 
          onChange={(e)=>(updateFieldHandler("review", e.target.value))} />
         <BsFillEmojiHeartEyesFill/>
          <p>Maravilhoso</p>
        </label>
      </div>
      <div className="from-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='Conte sobre sua experiência com o produto' value={data.comment || ""} 
        onChange={(e) =>{
          updateFieldHandler("comment", e.target.value)
        }}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
