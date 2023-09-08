"use client";
import Image from 'next/image'
import styles from './page.module.css'
import userData from './user-data'
import Daily from './daily'
import AnimationComponent  from './animation-test'
import React from "react"
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from './firebase-config'

import { useState, useEffect } from 'react';

export default function Home() {

  const [dailys, setDailys] = React.useState(userData.user.dailys);
  const [user, setUser] = React.useState({
    name: '',
    lvl: 0,
    exp: 0,
    dailys: []
  })
  

  const fetchPost = async () => {
    var documentID = 'Temp';
    var docData;
    const collectionRef = collection(db,'users');
    const docref = query(collectionRef, where('name', '==','Kane'))
    const querySnapshot = await getDocs(docref);
    querySnapshot.forEach((doc) => {
      
      documentID = doc.id
      docData = doc.data()
      
    });
    setUser({
      name: docData.name,
      lvl: docData.lvl,
      exp: docData.exp,
      dailys: docData.dailys
    })
    console.log(documentID);
    console.log(docData.name)
    console.log(user)

  
  }
    fetchPost();
    // console.log(docData)   
    

 

  

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
       <h1 className={styles.name}>User: {user.name}</h1>
        <h3 className={styles.lvl}>Lvl: {user.lvl}</h3>
        <h3 className={styles.lvl}>Exp: {user.exp}</h3>
        <h4 className={styles.lvl}>|{'-'.repeat(user.exp)}|</h4>
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
