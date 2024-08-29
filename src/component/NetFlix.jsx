import React from 'react'
import SeriesData from '../api/SeriesData.json';

const NetFlix = () => {
    return (
        <ul>
            {SeriesData.map((curElem) => {
                return (
                    <li key={curElem.id}>
                        <div>
                            <img src={curElem.img_url}
                                width="40%"
                                height="40%"
                                alt='img' />
                        </div>
                        <h2>Name: {curElem.name}</h2>
                        <h3>Ratings: {curElem.rating}</h3>
                        <p>Description: {curElem.description}</p>
                        <p>Genre:{curElem.genre} </p>
                        <p>Cast: {curElem.cast}</p>
                        <a href={curElem.watch_url} target='_blank'>
                            <button>Watch Now</button>
                        </a>
                    </li>
                )
            })}

        </ul>
    )
}

export default NetFlix