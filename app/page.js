"use client";
import Image from 'next/image'
import styles from './page.module.css'
import userData from './user-data'
import Daily from './daily'
import AnimationComponent  from './animation-test'
import React from "react"

import { useState, useEffect } from 'react';

export default function Home() {

  const [dailys, setDailys] = React.useState(userData.user.dailys);


function toggleCompleted(id){
  console.log('handle daily click')

  setDailys(prevDaily =>{
    return prevDaily.map((daily) => {
      console.log(daily.streak)
        
      return daily.id === id ? {...daily, iscompleted: !daily.iscompleted , streak: daily.iscompleted ? daily.streak -1 : daily.streak +1    } 
    : daily})
  })

}

const allDailys = dailys.map(daily => (
  <Daily
  id = {daily.id}
   title={daily.title}
   streak={daily.streak}
    iscompleted = {daily.iscompleted}
    toggleCompleted = {toggleCompleted}
      />
))


  return (
    <main className={styles.main}>
       <h1 className={styles.name}>User: {userData.user.name}</h1>
        <h3 className={styles.lvl}>Lvl: {userData.user.Lvl}</h3>
        <h3 className={styles.lvl}>Exp: {userData.user.exp}</h3>
        <h4 className={styles.lvl}>|{'-'.repeat(userData.user.exp)}|</h4>
            <div className={styles.content}>
              
              
              <img src="/character.png" alt="" width="250" height="400" className='character' />
              
                
                {allDailys}
              
              
              
            </div>
            <div>
              
            </div>
            {/* <AnimationComponent /> */}
        

    </main>
  )
}
