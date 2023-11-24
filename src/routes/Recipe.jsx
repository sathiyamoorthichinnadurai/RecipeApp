import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'



function Recipe() {
  const params=useParams()
  const [recipe,setrecipe] = useState({})
 

  const getrecipe = async()=>{
    const res= await fetch(url)
    const data=await res.json();
    consolelog(data)

  }
  useEffect(()=>{
   
  })
  return (
   <>

   
   </>
  )
}

export default Recipe