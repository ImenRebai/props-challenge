import './App.css';
import Article from './Commponents/Article';
import Header from './Commponents/Header';
import SideMenu from './Commponents/SideMenu';
const showCategories = true;
function App() {
  return (
    <div className="App">

      <Header />
<div style={{display: "flex", justifyContent: "center"}} >
{/*Article & SideMenu content  */}
  <div style={{display: "flex", width: "60%", justifyContent: "center"}}>
{/* Article content */}
     <div style={{width: "70%"}}>
        <Article  articleName="PinguCoder" articleBody="Platform e-learning">

        </Article>
        <Article articleName='Learn React' articleBody="with PinguCoder"/>
        <Article articleName='Third Article' articleBody="with PinguCoder" />
     

     </div>
{/*== Article content ==*/}

{/* SideMenu content */}
     <div style={{width: "30%", marginTop: "25px"}}>
     <AppSideMenu />
     </div>
{/*== SideMenu content ==*/}
  </div>
{/*== Article & SideMenu content  ==*/}

</div>
</div>
  );
}
function AppSideMenu(){
  if(showCategories == true){
    return(<SideMenu />)
  } else{
  return( null )}
}
export default App;
