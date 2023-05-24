import { useState } from 'react'
import db from './data.js'
import ProjectItem from './components/ProjectItem'

function App() {

  const [projects, setProjects] = useState(db)

  const setScore = (e, id) => {
    const newScore = e.target.value

    const [project] = projects.filter(project => project.id === id)

    project.score = newScore

    const idx = projects.indexOf(project)

    const arr = projects

    idx >= 0 && arr.splice(idx, 1)

    setProjects([project, arr])

  }

  return (
    <div className="w-screen h-screen bg-neutral-900 p-6">
      <div className="bg-neutral-50 w-[30rem] h-[60rem] rounded-3xl p-4">
        <span className="text-4xl font-semibold">Projects</span>
        <div className="flex flex-col gap-4 mt-4">
          {
            projects.map(project => <ProjectItem key={project.id} setScore={setScore} data={project}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
