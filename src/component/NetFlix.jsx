import React from 'react'
import SeriesData from '../api/SeriesData.json';
import SeriesCard from './SeriesCard';

const NetFlix = () => {

    //     const name = "Queen Of Tears";
    //     const rating = "8.2";
    //     const summery = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus accusamus 
    // iste, harum error animi modi eos laboriosam numquam iure et debitis provident aliquid 
    // excepturi tenetur nisi blanditiis. Culpa, quae.`;

    //     const returnGenre = () => {
    //         const genre = "RomCom";
    //         return genre;
    //     };

    //     let age = 16;

    // if (age < 18) {
    //     return (
    //         <>
    //             <div>
    //                 <div>
    //                     <img src='ban1.png' alt='banner' width="40%" height="40%" />
    //                 </div>
    //                 <h2>Name : {name} </h2>
    //                 <h3>Rating: {rating}</h3>
    //                 <h3>Summery:{summery}</h3>
    //                 <h3>Genre: {returnGenre()}</h3>
    //                 <button>Not Available</button>
    //             </div>
    //         </>

    //     );
    // }
    // return (
    //     <>
    //         <div>
    //             <div>
    //                 <img src='ban1.png' alt='banner' width="40%" height="40%" />
    //             </div>
    //             <h2>Name : {name} </h2>
    //             <h3>Rating: {rating}</h3>
    //             <h3>Summery:{summery}</h3>
    //             <h3>Genre: {returnGenre()}</h3>
    //             <button>Watch Now</button>
    //         </div>
    //     </>

    // );

    return (
        <>
            <ul className='grid grid-three--cols'>
                {SeriesData.map((curElem) => {
                    return (
                        <SeriesCard key={curElem.id} curElem={curElem} />
                    )
                })}
            </ul>

        </>

    );
}

export default NetFlix