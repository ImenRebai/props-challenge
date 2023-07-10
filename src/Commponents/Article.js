import React from 'react'
import TagButton from './TagButton'
export default function Article({articleName = "no content" , articleBody}) {
  return (
    <div style={{padding: "10px", border: "solid 3px #1d9bf0", margin: "25px"}}>
      <h2>{articleName}</h2>
      <hr/>
      <p>{articleBody}</p>
      <TagButton >
        <span>🐧🐧</span>
     </TagButton>
    </div>
  )
}


