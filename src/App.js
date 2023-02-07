import React from 'react'
import Card from './Card';
import Badge from './Badge';
import {useState} from 'react'

const App = () => {


  let [data,setData] = useState({

  username:''

  })
let {username} = data
// console.log(username)
 let  eventChange=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
const eventSubmit=(e)=>{
  e.preventDefault()

  console.log(username)
}

  return (


    <div>
        <Badge />
        <Card />
       <form >
          <input type="text" name='username' value={username} onChange={eventChange}/>
          <input type="submit" onClick={eventSubmit}/>
       </form>

       {username}
    </div>
  )
}

export default App
