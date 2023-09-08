"use client";
import Image from 'next/image'
import styles from './page.module.css'
import userData from './user-data'
import Daily from './daily'
import AnimationComponent  from './animation-test'
import React from "react"

import { useState, useEffect } from 'react';

export default function Home() {

  const dailyOneInfo = userData.user.dailys[0];

  const [firstDaily, setfirstDaily] = React.useState({
    title: dailyOneInfo.title,
    streak: dailyOneInfo.streak,
    iscompleted: dailyOneInfo.iscompleted
  })

 
  const allDailys = userData.user.dailys.map(daily => {
    return <Daily title={daily.title}
     streak={daily.streak}
      iscompleted = {daily.iscompleted}
      
        />
})



function toggleCompleted(){
  console.log('handle daily click')
  setfirstDaily(prevDaily => ({
    ...prevDaily,
    streak: prevDaily.iscompleted ? prevDaily.streak-1 : prevDaily.streak+1,
    iscompleted: !prevDaily.iscompleted
  }))

}


  return (
    <main className={styles.main}>
       <h1 className={styles.name}>User: {userData.user.name}</h1>
        <h3 className={styles.lvl}>Lvl: {userData.user.Lvl}</h3>
      
            <div className={styles.content}>
              
              {allDailys}
              <br/>
              <Daily title={firstDaily.title}
               streak = {firstDaily.streak}
                iscompleted = {firstDaily.iscompleted}
                 handleClick = {toggleCompleted}/>
            </div>
            <div>
              
            </div>
            {/* <AnimationComponent /> */}
        

    </main>
  )
}
