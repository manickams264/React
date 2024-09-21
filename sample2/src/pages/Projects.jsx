import React from 'react'
import Navbar from '../components/Navbar'
import y from '../assets/img/Picture1.png'
import z from '../assets/img/Screenshot 2024-09-21 012821.png'
const Projects = () => {
  return (
    <>
    <div className="w-screen h-36 flex  items-center bg-stone-400">
      <div className="w-[80%] h-[50%] flex justify-center items-center text-3xl text-white font-extrabold bg-purple-500">
        My Projects has been displayed below
      </div>
    </div>
    <div className="h-96 w-screen flex flex-row justify-center items-center bg-stone-400 gap-8">
      <div className="h-[90%] w-80 flex bg-purple-500 p-2">
        <div className="h-[50%] w-full flex ">
          <img src={y} alt="project1" />
        </div>
      </div>
      <div className="h-[90%] w-80 flex bg-purple-500 p-2">
      <div className="h-[50%] w-full flex ">
          <img src={z} alt="project2" />
        </div>
      </div>
      <div className="h-[90%] w-80 flex bg-purple-500">
      </div>

    </div>
    </>
  )

}

export default Projects