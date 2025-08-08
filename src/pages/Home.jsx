//rafce
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingimg from '../assets/landingimg.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectsAPI } from '../services/allAPI'




const Home = () => {
  const navigate = useNavigate()
  const [homeProjects, setHomeProjects] = useState([])
  const [islogin, setIsLogin] = useState(false)

  console.log(homeProjects);


  useEffect(() => {
    getHomeprojects()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  const getHomeprojects = async () => {
    try {
      const result = await homeProjectsAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data)
      }

    } catch (err) {
      console.log(err);

    }
  }

  const handleNavigateToProject = ()=>{
    //user is logined?
    if(sessionStorage.getItem("token")){
      //authorised user then redirect
      navigate('/projects')
    }else{
      //not an aothorised user then alert please login
      alert("Please login to get full access to our project collection!!!")
    }
  }

  return (
    <>
      {/* landing */}
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }} ><i className="fa-brands fa-docker me-2"></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }} >One Stop Destination for all Software Development Projects. Where user can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!! </p>
              {
                islogin ?
                  <Link to={'/dashboard'} className="btn btn-warning">MANAGE YOUR PROJECTS</Link>
                  :
                  <Link to={'/login'} className="btn btn-warning">STARTS TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={landingimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Explore our projects */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {
              homeProjects?.map(projects => (
                <div className="me-5">
                  <ProjectCard displayData={projects} />
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleNavigateToProject} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS..</button>
      </div>

      {/* Our Testimonials */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          {/* card */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://tse4.mm.bing.net/th?id=OIP.FZPwy2a4714RejChdfNfgwHaHa&pid=Api&P=0&h=220" alt="" />
                <div className="d-flex justify-content-center my-2 ">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <div style={{ textAlign: 'justify' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png" alt="" />
                <div className="d-flex justify-content-center my-2 ">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <div style={{ textAlign: 'justify' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG-Image.png" alt="" />
                <div className="d-flex justify-content-center my-2 ">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <div style={{ textAlign: 'justify' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home



