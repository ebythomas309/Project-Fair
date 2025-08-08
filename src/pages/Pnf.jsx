//rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column ' >
      <h1 style={{fontSize:"100px"}}>404</h1>
      <img className='img-fluid' style={{height:'40vh'}} src="https://ugokawaii.com/wp-content/uploads/2023/04/plane.gif" alt="" />
      <h1>look like you'r lost</h1>
      <p>page you'r looking for is not available!!</p>
      <Link to={'/'} className="btn btn-warning">Go To Home</Link>
    </div>
  )
}

export default Pnf