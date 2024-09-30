import React from 'react'

const SeriesCard = (props) => {

  //const {id,img_url, name, rating, description, cast, genre, watch_url} = props.curElem
  // destructuring props
  return (
    <li className='card'>
      <div>
        <div>
          <img src={props.curElem.img_url} alt='banner' width="40%" height="40%" />
        </div>
        <div className='card-content'>
        <h2>Name : {props.curElem.name} </h2>
        <h3>Rating: {props.curElem.rating}</h3>
        <h3>Summery:{props.curElem.description}</h3>
        <p>Genre: {props.curElem.genre}</p>
        <p>Cast: {props.curElem.cast}</p>
        <a href={props.curElem.watch_url} target='_blank'></a>
        <button style={{padding:"1.2rem 2.4rem", border:"none", fontSize:"1.6rem",
          backgroundColor:"var(--bnt-hover-bg-color)",
          color:"var(--bg-color)"
        }}>Watch now</button>
        </div>
      </div>
    </li>
  )
}

export default SeriesCard