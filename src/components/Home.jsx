import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"flex", gap:"20px", flexDirection:"column", marginLeft:"50rem"}}>
      <h1>Home Page</h1>
      <Link to="/header" > Header </Link>
      <Link to="/react-post" > React Post </Link>

      <Link to="/react-query" > React-query </Link>
    </div>
  )
}

export default Home
