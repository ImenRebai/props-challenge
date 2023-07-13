import React from 'react'
import TagButton from './TagButton'

export default function SideMenu() {

  const categories = [{id: 1, title: "Programming" , 
                       c: (<div>
                             <span>
                              🐧🐧 😃 🐧🐧 
                             </span>
                           </div>)},
     {id: 2, title: "Data Sciences", c: (<div> <img  style={{width: "100%"}}src="https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt=""/></div>
     ) },
     {id: 3, title: "Technology", c: (<><h4> Click Me </h4><span>😎😎😎</span></>)},
     {id: 4, title: "Self Improvment"}
     ];
 const categorieList = categories.map((categ) => {
  return(<TagButton key ={categ.id}  title = {categ.title}>
         {categ.c}
          </TagButton>);
 })
  return (
    <div style={{margin: "25px", border: "solid 3px #1d9bf0 "}}>
    {categorieList}
    </div>
  )
}

