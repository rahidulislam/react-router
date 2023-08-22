import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../data';
const Blog = () => {
    const {title}=useParams();
    const [bodyData,setBodyData]=useState("");
    useEffect=()=>{
        const blogData = Data.filter(blog=>blog.title===title)
        setBodyData(blogData[0].body)
    }
  return (
    <div>
        <h3>{title}</h3>
    
        </div>
  )
}

export default Blog