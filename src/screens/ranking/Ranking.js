import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import Button from "../../components/ui/button/Button";
import SCREENS from "../../routes/screenName";
import React from "react";
import "./ranking.css";

function Ranking() {

  const getRanking = !!JSON.parse(localStorage.getItem("ranking")) ? JSON.parse(localStorage.getItem("ranking")) : [];
  
  getRanking.sort((a, b) => b.score - a.score);
  const navigate = useNavigate();

  function goToHome() {
    navigate(SCREENS.home);
  }


  return (
    <>
      <BgContainer />
      <div className="rank-container">
        <h1 className="title-ranking">Flying shuttle</h1>
        <div className="ranking">
          {
            getRanking.length > 0 ? 
           <>
            <table>
            <thead>
              <tr>
                <th>Posizione</th>
                <th className="td-username">Utente</th>
                <th>Miglior punteggio</th>
              </tr>
            </thead>

            <tbody>
              {
                getRanking.map((el, key) => {
                  return (
                    <React.Fragment key={key + Date.now()}>
                      <tr>
                        <td>{key + 1}</td>
                        <td className="td-username">{el.username}</td>
                        <td>{el.score}</td>
                      </tr>

                    </React.Fragment>
                  )
                })}

              </tbody>
            </table>
           </> : 
           <>
            <div className="empty-ranking">
                Non è stata effettuata nessuna giocata
            </div>
           </>
          }

        </div>
        <Button label={"Home"} callback={goToHome} />
      </div>
    </>
  );
}

export default Ranking;
