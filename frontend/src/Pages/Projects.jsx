import React, {useEffect, useState} from 'react'
import api from '../../api';
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import {ThreeDot} from 'react-loading-indicators'
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [readMe, setReadMe] = useState([]);
  const [loadRead, setLoadRead] = useState(false);
  
  const getProjects = async () => {
    const response = await api.get('/api/projects');
    setProjects(response.data.projects);
    setLoadRead(true);

  }
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Header />
      <NavBar/>
      <ScrollToTopButton/>
      <div className="page-shell">
        <div className = "page-card">
          {!loadRead ? <ThreeDot color="black" size="medium" text="" textColor="" /> : 
          (<div className="projects-grid">
      
          {projects.map((project, index) => {
            return (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className = "project-card" key={index}>
                <img src = {project.imageUrl} alt = {project.name}/>
                <hr></hr>
                <h3>{project.name}</h3>
                <span className = "readme">
                  <ReactMarkdown>{project.readMe?.length > 100 ? project.readMe.slice(0,100) + "..." : project.readMe}</ReactMarkdown>
                </span>
              </div>
              </a>
            );
            })}
          </div>)}
        </div>
      </div>
    <div id = "bottom-gradient"></div>
    </>
  )
}