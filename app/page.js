"use client";
import Image from 'next/image'
import styles from './page.module.css'
import userData from './user-data'
import Daily from './daily'
import AnimationComponent  from './animation-test'
import React from "react"
import { collection, query, where, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
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
          console.log('Document ID: ' + doc.id)
          setUser(docData)

          
        });
      }
      fetchPost();
    }, []); 

 

  async function updateDocFunction(index){
    console.log('Index: '+index)
    const docRef = doc(db, 'users', "meyWpeyXTzOV9GQOivZa");
    const dailyIdToUpdate = index;
console.log('daily id to update: '+dailyIdToUpdate)
    const docSnap = await getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          console.log("User data inside update: \n"+userData.dailys[index].iscompleted)
          // Find the daily task with the specified ID in the "dailys" array
          const updatedDailys = userData.dailys.map((daily) => {
            if (daily.id === dailyIdToUpdate) {
              // Update the "iscompleted" field to false
              return { ...daily, iscompleted: !daily.iscompleted };
            }
            return daily;
          });

          // Update the "dailys" array in the Firestore document
          updateDoc(docRef, { dailys: updatedDailys }, { merge: true })
            .then(() => {
              console.log('Document successfully updated!');
              window.location.reload(false)
              
            })
            .catch((error) => {
              console.error('Error updating document: ', error);
            });
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error getting document: ', error);
      });

      
    
  }

  const allDailysDataBase = user.dailys?.map(daily => (
    <Daily
    key = {daily.id}
    id = {daily.id}
    title={daily.title}
    streak={daily.streak}
      iscompleted = {daily.iscompleted}
      toggleCompleted = {()=>updateDocFunction(daily.id)}
        />
  ))





  //===================return================================//
  return (
    <main className={styles.main}>
      <input type="text" />
      <button onClick={null}>Sign In</button>
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
