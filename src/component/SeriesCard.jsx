import React from 'react'
import styled from 'styled-components';
const SeriesCard = (props) => {

  const { id, img_url, name, rating, description, cast, genre, watch_url } = props.curElem
  // destructuring props

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color:"var(--btn-color)",
  };
  return (
    <li className='card'>
      <div>
        <div>
          <img src={img_url} alt='banner' width="40%" height="40%" />
        </div>
        <div className='card-content'>
          <h2>Name : {name} </h2>
          <h3>Rating: <span className={`rating ${ratingClass}`}>{rating}</span>
          </h3>
          <p>Summery:{description}</p>
          <p>Genre: {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target='_blank'></a>
          <button style={btn_style}>Watch now</button>
        </div>
      </div>
    </li>
  )
}

export default SeriesCard