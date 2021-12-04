import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";


export default function QyAanswer() {
    const qya = useSelector(state => state.index.moreTalent)
    
    return (
        <div class="h-1/4 m-3">
          <h3 class="text-xl font-semibold">Preguntas</h3>
          <div>
          {
          qya?.reviews?.question
          ?
          qya?.reviews?.question.map((e) => e.questions) 
          : 
          <span>Aun no hay preguntas</span>
          }
          </div>
          <hr />
        </div>
    )
}