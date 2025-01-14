import React,{useState,useEffect} from 'react'
import './slider.css';
import { data } from 'react-router-dom';

export default function Slider() {
    const[dogs]=useState(data);
    const [index,setIndex]=useState(0);
     
    useEffect(()=>{
        const lastIndex=dogs.length-1;
        if(index<0){
            setIndex(lastIndex);
        }
        if(index>lastIndex){
            setIndex(0);
        }
    },[index,dogs])

    useEffect(()=>{
         let slider=setInterval(()=>{
            setIndex(index+1)
         },5000);
         return()=>{
            clearInterval(slider);
         };
    },[index]);


  return (
   <section className='section1'>
          <div className='title'>
            <h2>Grooming Items</h2>
          </div>
   </section>
  )
}


