import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



const hostAPI = process.env.REACT_APP_API_CALL;
const ReactPost = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
		fetchApi();
	}, []);

    const fetchApi = async () => {
		const response = await axios.get(`${hostAPI}`);
		setPosts(response.data)
	};

  return (
    <div style={{display:"flex", gap:"0px", flexDirection:"column", marginLeft:"50rem"}}>
        {posts?.map(post => {
            return <h1 key={post.title}> {post.id}</h1>
        })}
    </div>
  )
}

export default ReactPost
