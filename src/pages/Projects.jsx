//rafce
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../services/allAPI'

const Projects = () => {
  const [searchKey,setSearchKey] = useState("")
  const [allProjects, setAllProjects] = useState([])
  console.log(allProjects);
  useEffect(() => {
    getAllProjects()
  },[searchKey])

  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await allProjectsAPI(reqHeader,searchKey)
        console.log(result);
        if (result.status == 200) {
          setAllProjects(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <h1>All Projects</h1>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Projects by their Language' className="form-control w-25" />
        </div>
        <Row>
          {
            allProjects.length > 0 ?
              allProjects?.map(projects => (
                <Col key={projects?._id} className='mb-3' sm={12} md={6} lg={4}>
                  <ProjectCard displayData={projects} />
                </Col>
              ))
              :
              <div className="fw-bolder text-danger">Project Not Found!!!</div>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects