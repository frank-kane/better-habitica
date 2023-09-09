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

  
  const [user, setUser] = React.useState({ })



  //==================================functions=======================================//
  

  
    
      
    useEffect(() => {
      //Runs only on the first render
      async function fetchPost() {
        var documentID = 'Temp';
        var docData;
        const collectionRef = collection(db,'users');
        const docref = query(collectionRef, where('name', '==','Volkor'))
        const querySnapshot = await getDocs(docref);
        querySnapshot.forEach((doc) => {
          
          documentID = doc.id
          docData = doc.data()
          console.log(docData.dailys)
          console.log('Document ID: ' + documentID)
          setUser(docData)

          
        });
      }
      fetchPost();
    }, []); 

 

  async function updateDoc(index){
    console.log('Update Doc')
    console.log(user)
    console.log('DocID: '+user.id)

    const docRef = doc(db, "users", user.id);
    const docSnap = await getDoc(docRef)
    const docData = docSnap.data();
    console.log("Name 2: "+docData.name)
    const dailyRef = docData.dailys[index]
    console.log(dailyRef)
    // await updateDoc(dailyRef, {
    //   id: dailyRef.id,
    //   title: dailyRef.title,
    //   streak: dailyRef.streak,
    //   iscompleted: true
    // });
    
  }

  const allDailysDataBase = user.dailys.map(daily => (
    <Daily
    key = {daily.id}
    id = {daily.id}
    title={daily.title}
    streak={daily.streak}
      iscompleted = {daily.iscompleted}
      toggleCompleted = {()=>updateDoc(daily.id-1)}
        />
  ))





  //===================return================================//
  return (
    <main className={styles.main}>
       <h1 className={styles.name}>User: {user.name}</h1>
        <h3 className={styles.lvl}>Lvl: {user.lvl}</h3>
        <h3 className={styles.lvl}>Exp: {user.exp}</h3>
        <h4 className={styles.lvl}>|{'-'.repeat(user.exp)}|</h4>
            <div className={styles.content}>
              
              
              <img src="/anime-guy.jpg" alt="" width="250" height="400" className='character' />
              
                
               
                <h1>|</h1>
                {allDailysDataBase}
                <h1>|</h1>
            </div>
            <div>
              
            </div>
            {/* <AnimationComponent /> */}
        

    </main>
  )
}
