import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import Button from "../../components/ui/button/Button";
import SCREENS from "../../routes/screenName";
import React from "react";
import "./ranking.css";

function Ranking() {
  const users = [
    {
      username: "luca",
      score: "3",
    },
    {
      username: "Mattia",
      score: "5",
    },
    {
      username: "teo",
      score: "55",
    },
    {
      username: "flavio",
      score: "18",
    },
    {
        username: "gigi",
        score: "100",
      },
      {
        username: "erika",
        score: "1005",
      },
      {
        username: "erika",
        score: "1005",
      },
      {
        username: "erika",
        score: "1005",
      },
      {
        username: "erika",
        score: "1005",
      },
      {
        username: "erika",
        score: "1005",
      },
      {
        username: "erika",
        score: "1005",
      },
  ];

  

  const getRanking = JSON.parse(localStorage.getItem("ranking"));
//   console.log('ranking',getRanking);
  getRanking.sort((a,b) => b.score - a.score);
  const navigate = useNavigate();

  function goToHome() {
    navigate(SCREENS.home);
  }

//   function sortRanking(){
//     users.sort((a,b) => b.score - a.score)
//   }

  return (
    <>
      <BgContainer />
      <div className="rank-container">
        <h1 className="title-ranking">Flying shuttle</h1>
        <div className="ranking">
            <table>
                 <thead>
                    <tr>
                        <th>Position</th>
                        <th>User</th>
                        <th>Score</th>
                    </tr>
                </thead>
 
                <tbody>
                   { 
                    getRanking.map((el,key) => {
                        return(
                            <React.Fragment key={key + Date.now()}>
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>{el.username}</td>
                                    <td>{el.score}</td>
                                </tr>
                                
                            </React.Fragment>
                        )
                    })

                    }

                </tbody>
            </table>
        
        </div>
        <Button label={"Home"} callback={goToHome} />
      </div>
    </>
  );
}

export default Ranking;
