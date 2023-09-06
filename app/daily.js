import React from "react"
import "./daily.css"

export default function Daily(props) {
    if(props.iscompleted == false){
        return(
            <div className="daily-false">
        <img src="/vercel.svg" alt="" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )
    }else{
        return(
            <div className="daily-true">
        <img src="/vercel.svg" alt="" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )

    }
    
}