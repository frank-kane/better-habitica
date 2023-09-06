"use client";
import Image from 'next/image'
import styles from './page.module.css'
import dailyData from './daily-data'
import Daily from './daily'
import AnimationComponent  from './animation-test'

import { useState, useEffect } from 'react';

export default function Home() {

  const allDailys = dailyData.user.dailys.map(daily => {
    return <Daily title={daily.title}
     streak={daily.streak}
      iscompleted = {daily.iscompleted}
        />
})



function handleCLick(){
  console.log('Handled Click')

}


  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
      
            <div className={styles.content}>
              
              {allDailys}
              <AnimationComponent />
              <button onClick={handleCLick}>CLick Me</button>
            </div>
            
        
        
         
      </div>
    </main>
  )
}
