import './App.css';

import Header from './Commponents/Header';

function App() {
const tasks = [{id: 1, title: "Task one", description: "This is the first task"},
{id: 2, title: "Task Tow", description: "This is another one"},
{id: 3, title: "Task Three", description: "A new task"}];

const myTaskList = tasks.map((task) => {
return <div key = {task.id}>{task.title}</div>
});
console.log(myTaskList)
return (
    <div className="App">
<Header />
<div style={{backgroundColor: "Teal"}}> 
<h1>
 {myTaskList} 
</h1>
</div>














{/* <div style={{display: "flex", justifyContent: "center"}} >
{/*Article & SideMenu content  */}
  {/* <div style={{display: "flex", width: "60%", justifyContent: "center"}}> */}
{/* Article content */}
     {/* <div style={{width: "70%"}}>
        <Article  articleName="PinguCoder" articleBody="Platform e-learning">

        </Article>
        <Article articleName='Learn React' articleBody="with PinguCoder"/>
        <Article articleName='Third Article' articleBody="with PinguCoder" />
     

     </div> */}
{/*== Article content ==*/}

{/* SideMenu content */}
     {/* <div style={{width: "30%", marginTop: "25px"}}>
     <AppSideMenu />
     </div> */}
{/*== SideMenu content ==*/}
  {/* </div> */}
{/*== Article & SideMenu content  ==*/}

</div>
// </div>
  );
}
// function AppSideMenu(){
//   if(showCategories == true){
//     return(<SideMenu />)
//   } else{
//   return(
//     <div></div>
//   )}

export default App;
