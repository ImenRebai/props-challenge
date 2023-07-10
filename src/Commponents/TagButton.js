import React from 'react'
import './tagButtonStyle.css'

export default function TagButton({title, children}) {
 return ( 
   <div> 
     {title == null || title == ""  ?
   (<div></div>) : (<button className="tagButton">
                      {title}
                      {children}
                    </button>)}
 
</div>
);
}


