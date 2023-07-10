import './App.css';
import Article from './Commponents/Article';
import Header from './Commponents/Header';
import SideMenu from './Commponents/SideMenu';

function App() {
  return (
    <div className="App">

      <Header />
<div style={{display: "flex", justifyContent: "center"}} >
{/*Article & SideMenu content  */}
  <div style={{display: "flex", width: "60%", justifyContent: "center"}}>
{/* Article content */}
     <div style={{width: "70%"}}>
     <Article  articleName="PinguCoder" articleBody="Platform e-learning"/>
     <Article articleName='Learn React' articleBody="with PinguCoder"/>
     <Article articleName='Learn Angular' articleBody="with PinguCoder" />
     <Article articleName='Learn VueJs' articleBody="with PinguCoder"/>
     <Article articleName='Learn ExpressJS' articleBody="with PinguCoder"/>

     </div>
{/*== Article content ==*/}

{/* SideMenu content */}
     <div style={{width: "30%", marginTop: "25px"}}>
     <SideMenu />
     </div>
{/*== SideMenu content ==*/}




  </div>
{/*== Article & SideMenu content  ==*/}

</div>
    </div>
  );
}

export default App;
