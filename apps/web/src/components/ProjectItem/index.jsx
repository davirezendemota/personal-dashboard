import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

function ProjectItem({data, setScore,...props}) {

  const { title, score, id } = data

  return (
    <div {...props} className="w-full h-16 bg-neutral-700 rounded-2xl p-4 justify-between flex">
      <span className="text-white font-medium text-xl">{ title }</span>
      <span className="text-white text-lg">{ score }</span>
      <div className="flex gap-2 items-center">
        <input type="number" onChange={(e) => {setScore(e, id)}} />
      </div>
    </div>
  )
}

export default ProjectItem
