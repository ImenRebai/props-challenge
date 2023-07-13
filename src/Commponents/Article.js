import React from 'react'
import TagButton from './TagButton'

export default function Article({articleName = "no title" , articleBody = "no content" }) {
  return (
    <div style={{padding: "10px", border: "solid 3px #1d9bf0", margin: "25px"}}>
      <h2>{articleName}</h2>
      <p>{articleBody}</p>
      <TagButton >
        <span>🐧🐧</span>
     </TagButton>
    </div>
  )
}


