import { useState,useEffect } from 'react';
import './ranking.css';

function Ranking(){

    const getRanking = JSON.parse(localStorage.getItem('ranking'));
 
    return(

        <>
            <div className="ranking">

            </div>
        
        </>


    )
}

export default Ranking;