import Image from 'next/image'
import styles from './page.module.css'
import dailyData from './daily-data'
import Daily from './daily'

//import { useState } from 'react';
export default function Home() {

  const allDailys = dailyData.map(daily => {
    return <Daily title={daily.title}
     streak={daily.streak}
      iscompleted = {daily.iscompleted}
      //backgroundColor={daily.iscompleted = false ? "red" : "green"}
        />
})


  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
          
            <div>
              {allDailys}
            </div>
          
        
        
         
      </div>
    </main>
  )
}
