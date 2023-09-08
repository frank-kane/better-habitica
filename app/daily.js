import React from "react"
import "./daily.css"


export default function Daily(props) {

    // function handleClick(){
    //     if(props.iscompleted == false){
    //         console.log('daily Completed')
    //         props.iscompleted == true
    //     }else if(props.iscompleted == true){
    //         console.log('daily Incomplete')
    //         props.iscompleted == false
    //     }
        
    // }
    if(props.iscompleted == false){
        return(
            <div className="daily-false" onClick={props.handleClick}  >
        <img src="/skull-image.png" alt="" className="skull" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )
    }else{
        return(
            <div className="daily-true" onClick={props.handleClick}>
        <img src="/skull-image.png" alt="" className='skull' />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )

    }
    
}