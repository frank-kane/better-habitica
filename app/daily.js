import React from "react"
import "./daily.css"


export default function Daily(props) {

   
    if(props.iscompleted == false){
        return(
            <div className="daily-false" onClick={()=>props.toggleCompleted(props.id)}  >
        <img src="/skull-image.png" alt="" className="skull" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )
    }else{
        return(
            <div className="daily-true" onClick={()=>props.toggleCompleted(props.id)}>
        <img src="/fire3.gif" alt="" className='skull' />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )

    }
    
}