import "./index.css"
import { useEffect, useState } from "react";
function App() {

  const [users,setUsers] = useState([])
 
const getusers =  async() => {
  const response = await fetch('https://api.github.com/users')
  setUsers(await response.json())
}

  useEffect(()=>{
    getusers()
  },[])
  return (
    <div className="App">
      <div className="section">
        
        <div className="title">
          <p className="heading">
            List of Github Users
          </p>
        </div>
        <div className="main_cart">
        {
          users.map((curElem)=>{
            return (
              <div className="cart">
          <div className="block1">
            <img src={curElem.avatar_url} alt="esish" />
          </div>
          <div className="block2">
          <div className="inside_block1">
            <p className="name">{curElem.login}</p>
            <p className="profession">Web Developer</p>
          </div>
         <div className="inside_block2">
             
            <div className="article1">
              <p className="articles">Articles</p>
              <p className="value">45</p>
            </div>

            <div className="article1">
              <p className="articles">Followers</p>
              <p className="value">100</p>
            </div>

            <div className="article1">
              <p className="articles">Following</p>
              <p className="value">56</p>
            </div>
            </div>
          </div>
        </div>
            )
          })
        }
        </div>

      </div>
    </div>
  );
}

export default App;
