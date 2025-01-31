type TagsParams = {
  tags: string[]
}

const Tags = ({ tags }: TagsParams) => {
  return (
    <ul className="inline-flex flex-row">
      {
        tags.map((tag, idx) => (
          <li className="text-xs text-white bg-red-600 rounded-xl py-1 px-3 mx-0.5 my-1 font-bold lowercase" key={tag + "_tag" + idx}>{tag}</li>
        ))
      }
    </ul>
  )
}

export default Tags
