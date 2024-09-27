import React from 'react'
import SeriesData from '../api/SeriesData.json';

const NetFlix = () => {

    const name = "Queen Of Tears";
    const rating = "8.2";
    const summery = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus accusamus 
iste, harum error animi modi eos laboriosam numquam iure et debitis provident aliquid 
excepturi tenetur nisi blanditiis. Culpa, quae.`;

    const returnGenre = () => {
        const genre = "RomCom";
        return genre;
    };

    let age = 16;

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
            <div>
                <div>
                    <img src='ban1.png' alt='banner' width="40%" height="40%" />
                </div>
                <h2>Name : {SeriesData[0].name} </h2>
                <h3>Rating: {SeriesData[0].rating}</h3>
                <h3>Summery:{SeriesData[0].description}</h3>
                <p>Genre: {SeriesData[0].genre}</p>
                <p>Cast: {SeriesData[0].cast}</p>
                <a href={SeriesData[0].watch_url} target='_blank'></a>
                <button>Watch now</button>
            </div>
        </>

    );
}

export default NetFlix