import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

function ProjectItem({data, inc, dec,...props}) {

  const { title } = data

  return (
    <div {...props} className="w-full h-16 bg-neutral-700 rounded-2xl p-4 justify-between flex">
      <span className="text-white font-medium text-xl">{ title }</span>
      <div className="flex gap-2 items-center">
        <AiOutlineCaretUp onClick={inc} className="hover:text-neutral-200 cursor-pointer text-2xl"/>
        <AiOutlineCaretDown onClick={dec} className="hover:text-neutral-200 cursor-pointer text-2xl"/>
      </div>
    </div>
  )
}

export default ProjectItem
