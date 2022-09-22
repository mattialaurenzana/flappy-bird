import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import BgContainer from '../../components/ui/bgcontainer/BgContainer';
import Button from '../../components/ui/button/Button'
import SCREENS from '../../routes/screenName';
import './ranking.css';

function Ranking() {

    const getRanking = JSON.parse(localStorage.getItem('ranking'));
    const navigate = useNavigate()

    function goToHome(){
        navigate(SCREENS.home)
    }

    return (
        <>
            <BgContainer />
            <div className='rank-container'>
                <h1 className="title-ranking">Flying shuttle</h1>
                <div className="ranking">
                    Ranking
                </div>
                <Button
                label={'Home'}
                callback={goToHome}
                />
            </div>


        </>


    )
}

export default Ranking;