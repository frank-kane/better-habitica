import React from "react"

export default function Daily(props) {
    if(props.iscompleted == false){
        return(
            <div
        style = {{backgroundColor : "red"}}
        >
        <img src="/vercel.svg" alt="" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )
    }else{
        return(
            <div
        style = {{backgroundColor : "green"}}
        >
        <img src="/vercel.svg" alt="" />
            <h3>{props.title}</h3>
            <p>Streak: {props.streak}</p>
            <p>is completed: {String(props.iscompleted)}</p>
            
        </div>

        )

    }
    
}