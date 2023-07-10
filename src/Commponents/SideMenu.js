import React from 'react'
import TagButton from './TagButton'

export default function SideMenu() {
  return (
    <div style={{margin: "25px", border: "solid 3px #1d9bf0 "}}>
      <TagButton  title ="Programming">
        <div>
        <span>
         🐧🐧 😃 🐧🐧 
        </span>
        </div>
        </TagButton>
       <TagButton title = "Data Sciences">
        <div> <img  style={{width: "100%"}}src="https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt=""/></div>
      </TagButton>
       <TagButton title = "Technology">
        <h4>
         Click Me
        </h4>
        <span>😎😎😎</span>
        </TagButton>
       <TagButton title = "Self Improvment"/>
       {/* <TagButton />
       <TagButton /> */}
    </div>
  )
}

