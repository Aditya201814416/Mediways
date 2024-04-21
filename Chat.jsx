import { useState,useEffect } from 'react';
import React from 'react'
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import{doc,setDoc,getFirestore,getDoc,onSnapshot,collection,addDoc,orderBy,query,serverTimestamp} from 'firebase/firestore'
import {database} from './firebaseconfig';

const Chat = () => {

    const [user,setUser]=useState(null);
    const [messages,setMessages]=useState([]);
    const[newMessage,setNewMessage]=useState();

    useEffect(()=>{
        const q=query(collection(db,"messages"),orderBy("timestamp"))
        const unsubscribe=onSnapshot(q,snapshot=>{
            setMessages(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
        return unsubscribe

    },[])

    useEffect(()=>{
        onAuthStateChanged(database,user=>{
            if(user)
            {
                setUser(user)
            }
            else{
                setUser(null);
            }
        })

    })

    const sendMessage=async()=>{
        await addDoc(collection(db,"messages"),{
            uid:user.uid,
            photoURL:user.phoroURL,
            displayName:user.displayName,
            text:newMessage,
            timestamp:serverTimestamp()
        })
        setNewMessage("");

    }
    const handleLogin=async()=>{
        const provider= new GoogleAuthProvider();
        try{
            const result=await signInWithPopup(database,provider)
        }
        catch(error){
            console.log(error);


        }
    }
  return (
    
    <>
    <button onClick={handleLogin}>Click here</button>
    </>
  )
}

export default Chat