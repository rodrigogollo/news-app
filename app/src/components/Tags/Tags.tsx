type TagsParams = {
  classname: string;
  tags: string[];
}

const Tags = ({ tags, classname }: TagsParams) => {
  return (
    <ul className="inline-flex flex-row flex-wrap">
      {
        tags.map((tag, idx) => (
          <li className={` ${classname}`} key={tag + "_tag" + idx}>{tag}</li>
        ))
      }
    </ul>
  )
}

export default Tags
