import './App.css';
import Article from './Commponents/Article';
import Header from './Commponents/Header';
import SideMenu from './Commponents/SideMenu';

function App() {
  const articles = [{id: 1, articleName: "PinguCoder", articleBody: "Platform e-learning"},
  {id: 2, articleName: "Learn React", articleBody: "with PinguCoder"},
  {id: 3, articleName:"Learn Angular", articleBody: "with PinguCoder"},
  {id: 4, articleName: "Learn VueJs", articleBody: "with PinguCoder" },
  {id: 5, articleName: "Learn ExpressJS", articleBody:"with PinguCoder"}
];

const articleList = articles.map((article) => {
return (<Article key = {article.id} articleName ={article.articleName} articleBody = {article.articleBody} />)})
  
  return (
    <div className="App">

      <Header />
<div style={{display: "flex", justifyContent: "center"}} >
{/*Article & SideMenu content  */}
  <div style={{display: "flex", width: "60%", justifyContent: "center"}}>
{/* Article content */}
     <div style={{width: "70%"}}>
      {articleList}
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
