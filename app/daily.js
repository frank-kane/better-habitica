import React from "react"
import "./daily.css"

export default function Daily(props) {
    function handleClick(){
        if(props.iscompleted == false){
            console.log('daily Completed')
        }else if(props.iscompleted == true){
            console.log('daily Incomplete')
        }
        
    }
    if(props.iscompleted == false){
        return(
            <div className="daily-false" onClick={handleClick}  >
        <img src="/vercel.svg" alt="" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )
    }else{
        return(
            <div className="daily-true" onClick={handleClick}>
        <img src="/vercel.svg" alt="" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )

    }
    
}