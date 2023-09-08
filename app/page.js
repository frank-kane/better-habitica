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

  const [docID, setDocID] = React.useState('Temp')


  //==================================functions=======================================//
  

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
    setDocID(documentID);
    console.log('Doc Id: '+ documentID);
    console.log('User name: '+docData.name)
    //console.log(user)

  
  }
    fetchPost();
      
    

 

  

  function toggleCompleted(id){
    console.log('handle daily click')

    setDailys(prevDaily =>{
      return prevDaily.map((daily) => {
        console.log(daily.streak)
          
        return daily.id === id ? {...daily, iscompleted: !daily.iscompleted , streak: daily.iscompleted ? daily.streak -1 : daily.streak +1    } 
      : daily})
    })

  }

  const updateDoc = async(index) => {
    index = 2;
    console.log('Update Doc')
    console.log('DocID: '+docID)

    const docRef = doc(db, "users", docID);
    const docSnap = await getDoc(docRef)
    const docData = docSnap.data();
    console.log("Name 2: "+docData.name)
    const dailyRef = docData.dailys[1]
    console.log(dailyRef.iscompleted)
    //const docSnap = await getDoc(docRef);
    await updateDoc(dailyRef, {
      'iscompleted': true
    });
    
  }

  const allDailysDataBase = user.dailys.map(daily => (
    <Daily
    id = {daily.id}
    title={daily.title}
    streak={daily.streak}
      iscompleted = {daily.iscompleted}
      toggleCompleted = {updateDoc}
        />
  ))

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
                <h1>|</h1>
                {allDailysDataBase}
              
              
            </div>
            <div>
              
            </div>
            {/* <AnimationComponent /> */}
        

    </main>
  )
}
